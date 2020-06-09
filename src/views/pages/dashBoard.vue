<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="all-container">
      <!-- 当前功率 -->
        <div class="plant-status flex-around">
          <div class="water-level-chart">
            <div class="text pd10">当前功率</div>
            <dv-water-level-pond class="power-img" :config="power" style="width:200px;height:200px" />
          </div>
          <div class="water-level-chart">
            <div class="text pd10">今日发电</div>
            <dv-decoration-9 :dur="generDur" style="width:200px;height:200px;">66</dv-decoration-9>
          </div>
          <div class="water-level-chart">
            <div class="text pd10">本月发电</div>
            <dv-decoration-9 :dur="generDur" style="width:200px;height:200px;">66</dv-decoration-9>
          </div>
          <div class="water-level-chart">
            <div class="text pd10">累计发电</div>
            <dv-decoration-9 :dur="generDur" style="width:200px;height:200px;">66</dv-decoration-9>
          </div>
          <div class="water-level-chart">
            <div class="text pd10">累计收益</div>
            <dv-decoration-9 :dur="generDur" :color="['#67C23A','green']" style="width:200px;height:200px;">66</dv-decoration-9>
          </div>
        </div>
        <!-- <div class="tableList">
          <dv-scroll-board :config="list" style="width:auto;height:220px" />
        </div> -->
        <div class="chart-view">
          <el-echart :datas="echartData['power']" height="300px"></el-echart>
        </div>
        <div class="chart-view">
          <el-echart :datas="echartData['elec']" height="300px"></el-echart>
        </div>
      </div>
    </dv-border-box-11>
  </dv-full-screen-container>
</template>

<script>
import echartData from './echartData'
export default {
  mixins: [echartData],
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
#dv-full-screen-container {
  // background-color: pink;
}
.all-container {
  padding: 80px 20px 20px;
}
.power-img {
  // border: 10px solid #19c3eb;
  border-radius: 50%;
}
.water-level-chart {
  background-color: rgba(6,30,93,.5);
  border-top: 2px solid rgba(1,153,209,.5);
  font-size: 20px;
  text-align: center;
  .text span {
    // font-size: 30px;
    font-weight: 700;
    color: #58a1ff;
    margin-bottom: -5px;
  }
}
</style>
