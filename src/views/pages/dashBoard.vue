<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="out-container">
        <div class="top-container">
          <div class="left-container">
            <div class="power-c">
              <power-status :incomeDetail="incomeDetail"></power-status>
            </div>
            <div class="chart-container">
              <div class="chart-view">
                <dv-border-box-10>
                  <div class="title-common">
                    <div class="title">电站功率</div>
                    <dv-decoration-1 style="width:150px;height:30px;" />
                  </div>
                  <el-echart :datas="echartData['power']" :height="chartH + 'px'"></el-echart>
                </dv-border-box-10>
              </div>
              <div class="chart-view">
                <dv-border-box-10>
                  <div class="title-common">
                    <div class="title">发电量</div>
                    <dv-decoration-1 style="width:150px;height:30px;" />
                  </div>
                  <el-echart :datas="echartData['elec']" :height="chartH + 'px'"></el-echart>
                </dv-border-box-10>
              </div>
            </div>
            <div class="tableList">
              <dv-scroll-board :config="list" style="width:auto;height:230px" />
            </div>
          </div>
          <div class="right-container flex-column-between ">
            <div class="current-power">
              <current-power :power="incomeDetail.power" :capacity="incomeDetail.systemCapacity"></current-power>
            </div>
            <div class="device-status">
              <device-status :deviceStatus="deviceStatus"></device-status>
            </div>
            <div class="today-abnormal">
              <today-abnormal :total="todayFault"></today-abnormal>
            </div>
          </div>
        </div>
        <div class="bottom-container">
        </div>
      </div>
    </dv-border-box-11>
  </dv-full-screen-container>
</template>

<script>
import echartData from './components/echartData'
import powerStatus from './components/powerStatus'
import currentPower from './components/currentPower'
import deviceStatus from './components/deviceStatus'
import todayAbnormal from './components/todayAbnormal'
export default {
  mixins: [echartData],
  components: {
    powerStatus,
    deviceStatus,
    currentPower,
    todayAbnormal
  },
  data () {
    return {
      plantList: [],
      currentId: '',
      todayFault: 0,
      deviceStatus: {},
      searchForm: {
        status: 0, // 0 全部 ，1 正常， 2 异常
        batteryMainSN: '',
        deviceSN: '',
        deviceType: '',
        moduleSN: ''
      },
      resultList: [],
      incomeDetail: {
        power: 0,
        systemCapacity: 0,
        today: 0,
        month: 0,
        cumulate: 0,
        earnings: {
          currency: '-',
          value: 0
        }
      },
      generDur: 10,
      chartH: 260,
      power: {
        data: [30],
        shape: 'round',
        formatter: '{value}kw/h',
        colors: ['green'],
        waveNum: 6,
        waveHeight: 10
      },
      list: {
        header: ['逆变器sn', '模块sn', '设备类型', '发电功率', '今日发电', '累计发电', '并网时间', '设备状态'],
        data: [],
        index: true,
        columnWidth: [50],
        align: ['center'],
        carousel: 'page',
        headerBGC: '#31457C'
      }
    }
  },
  async mounted () {
    // await this.getPlantList()
    if (this.plantList.length > 0) {
      this.currentId = this.plantList[0].stationID
      this.sendAllRequest(this.currentId)
    }
  },
  methods: {
    sendAllRequest (id) {
      this.getAbnormalStatus(id)
      this.getPlantEarns(id)
      this.getDeviceStatus(id)
      this.getDeviceList(id)
      this.getLineData(id)
      this.getBarData(id)
    },
    // 获取电站下拉列表
    async getPlantList () {
      let { result } = await this.$axios({
        url: '/v0/plant/droplist'
      })
      if (result) {
        this.plantList = result.plants || []
      }
      return true
    },
    // 获取今日异常
    async getAbnormalStatus (id) {
      let { result } = await this.$axios({
        url: '/v0/plant/alarm/today',
        data: {
          stationID: id
        }
      })
      if (result) {
        this.todayFault = result.total || 0
      }
      return true
    },
    // 获取单个电站的发电和收益情况
    async getPlantEarns (id) {
      let { result } = await this.$axios({
        url: '/v0/plant/earnings/detail',
        data: {
          stationID: id
        }
      })
      if (result) {
        this.incomeDetail.power = result.power
        this.incomeDetail.currencyCount = 0
        this.incomeDetail.systemCapacity = result.systemCapacity
        this.incomeDetail.today = result.today.generation
        this.incomeDetail.month = result.month.generation
        this.incomeDetail.cumulate = result.cumulate.generation
        this.incomeDetail.earnings = {
          currency: result.currency,
          value: result.cumulate.earnings
        }
      }
      return true
    },
    // 获取电站下的设备状态
    async getDeviceStatus (id) {
      let { result } = await this.$axios({
        url: '/v0/plant/status/detail',
        data: {
          stationID: id
        }
      })
      if (result) {
        this.deviceStatus = result
      }
      return true
    },
    // 获取电站下的设备列表
    async getDeviceList (id, pagination) {
      let pages = pagination || this.$store.state.pagination
      let { result } = await this.$axios({
        method: 'post',
        url: '/v0/plant/device/list',
        data: {
          ...pages,
          stationID: id,
          condition: this.searchForm
        }
      })
      if (result) {
        this.resultList = result.devices || []
        this.list.data = this.transformList(this.resultList)
      }
      return true
    },
    // 折现图表数据功率
    async getLineData (id) {
      let { result } = await this.$axios({
        url: `/v0/plant/history/raw`,
        isLoad: false,
        method: 'post',
        data: {
          plantID: id,
          variables: ['generationPower', 'feedinPower', 'loadsPower'],
          timespan: 'day',
          beginDate: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: 0,
            minute: 0,
            second: 0
          }
        }
      })
      if (result && result.length > 0) {
        this.echartData.power.legend.data = result.map(v => v.variable)
        this.echartData.power.series = result.map(v => {
          let tempData = v.data.map(item => [Date.parse(item.time), (item.value).toLocaleString()])
          return {
            symbol: 'none',
            type: 'line',
            name: v.variable,
            data: tempData,
            smooth: true,
            markPoint: {
              data: [
                { type: 'max', name: '最大值', itemStyle: { color: 'green' } },
                { type: 'min', name: '最小值', itemStyle: { color: '#F96867' } }
              ]
            }
          }
        })
      }
      return true
    },
    // 柱状图表数据;电量统计
    async getBarData (id) {
      let { result } = await this.$axios({
        url: `/v0/plant/history/report`,
        method: 'post',
        isLoad: false,
        data: {
          plantID: id,
          reportType: 'day',
          variables: ['feedin', 'generation', 'loads', 'gridConsumption'],
          queryDate: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: new Date().getHours()
          }
        }
      })
      if (result && result.length > 0) {
        if (result[0].data && result[0].data.length > 0) {
          this.echartData.elec.xAxis.data = result[0].data.map(v => v.index)
        }
        this.echartData.elec.legend.data = result.map(v => v.variable)
        this.echartData.elec.series = result.map(v => {
          return {
            type: 'bar',
            name: v.variable,
            data: v.data
          }
        })
      }
      return true
    },
    // 转换成滚动播放的列表
    transformList (resultList) {
      let temp = []
      if (resultList.length > 0) {
        resultList.forEach(v => {
          let { deviceSN, moduleSN, deviceType, power, generationToday, generationTotal, feedinDate, status } = v
          let statusVaue = status === 1 ? '正常' : status === 2 ? '不正常' : '离线'
          temp.push([
            deviceSN,
            moduleSN,
            deviceType,
            power,
            generationToday,
            generationTotal,
            feedinDate,
            statusVaue
          ])
        })
      }
      return temp
    }
  }
}
</script>
<style lang="less" scoped>
.out-container {
  padding: 60px 20px 20px;
  .top-container {
    display: flex;
  }
  .left-container {
    flex: 1;
  }
  .right-container {
    overflow: hidden;
    width: 400px;
    margin-left: 10px;
    box-sizing: border-box;
  }
}
.chart-container {
  .chart-view {
    // width: 50%;
    margin: 5px 0;
  }
}
.title-common {
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  padding: 5px 0 10px 20px;
  .title {
    margin: 10px 0 5px;
  }
}
.tableList {
  margin: 10px 0;
}
</style>
