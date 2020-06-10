<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="out-container">
        <div class="top-container">
          <div class="left-container">
            <div class="power-c">
              <power-status></power-status>
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
              <current-power></current-power>
            </div>
            <div class="device-status">
              <device-status></device-status>
            </div>
            <div class="today-abnormal">
              <today-abnormal></today-abnormal>
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
        data: [
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2'],
          ['行1列1', '行1列2', '行1列3', '行1列1', '行1列2', '行1列3', '行1列1', '行1列2']
        ],
        index: true,
        columnWidth: [50],
        align: ['center'],
        carousel: 'page',
        headerBGC: '#31457C'
      }
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
    width: 400px;
    margin-left: 10px;
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
