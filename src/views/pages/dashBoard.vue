<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="out-container">
        <div class="main-header flex">
          <div class="main-left">
            <power-status/>
          </div>
          <div class="main-right">
            <device-status/>
          </div>
        </div>
        <div class="main-container">
          <div class="chart-power"></div>
          <div class="chart-ger"></div>
          <div class="device-list"></div>
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
import deviceStatus from './deviceStatus'
export default {
  mixins: [echartData],
  components: {
    powerStatus,
    deviceStatus
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
  .main-header {
    height: 100px;
    .main-left {
      width: 60%;
    }
    .main-right {
      width: 40%;
    }
  }
}
</style>
