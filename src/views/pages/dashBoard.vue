<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="out-container">
        <div class="left-container">
          <div class="power-c">
            <power-status></power-status>
          </div>
          <div class="chart-view">
            <dv-border-box-6>
              <el-echart :datas="echartData['power']" height="200px"></el-echart>
            </dv-border-box-6>
          </div>
          <div class="chart-view">
            <dv-border-box-6>
              <el-echart :datas="echartData['elec']" height="200px"></el-echart>
            </dv-border-box-6>
          </div>
        </div>
        <div class="right-container">
          <div class="current-power flex-center">
            <current-power></current-power>
          </div>
          <div class="device-status">
            <device-status></device-status>
          </div>
        </div>
        <!-- <div class="all-container">
          <div class="tableList">
            <dv-scroll-board :config="list" style="width:auto;height:220px" />
          </div>
          <div class="chart-view">
            <el-echart :datas="echartData['power']" height="300px"></el-echart>
          </div>
          <div class="chart-view">
            <el-echart :datas="echartData['elec']" height="300px"></el-echart>
          </div>
        </div> -->
      </div>
    </dv-border-box-11>
  </dv-full-screen-container>
</template>

<script>
import echartData from './echartData'
import powerStatus from './powerStatus'
import currentPower from './currentPower'
import deviceStatus from './deviceStatus'
export default {
  mixins: [echartData],
  components: {
    powerStatus,
    deviceStatus,
    currentPower
  },
  data () {
    return {
      generDur: 10,
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
        columnWidth: [],
        align: ['center'],
        carousel: 'page'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.out-container {
  padding: 80px 20px 20px;
  display: flex;
  .left-container {
    flex: 1;
  }
  .right-container {
    width: 300px;
  }
}
</style>
