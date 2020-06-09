<template>
  <!-- 当前功率 -->
  <div class="plant-status flex-around">
    <div class="water-level-chart">
      <div class="text pd10">当前功率</div>
      <dv-water-level-pond class="power-img" :config="power" style="width:120px;height:120px" />
    </div>
    <div class="water-level-chart">
      <div class="text pd10">今日发电</div>
      <dv-decoration-9 :dur="generDur" style="width:120px;height:120px;">66</dv-decoration-9>
    </div>
    <div class="water-level-chart">
      <div class="text pd10">本月发电</div>
      <dv-decoration-9 :dur="generDur" style="width:120px;height:120px;">66</dv-decoration-9>
    </div>
    <div class="water-level-chart">
      <div class="text pd10">累计发电</div>
      <dv-decoration-9 :dur="generDur" style="width:120px;height:120px;">66</dv-decoration-9>
    </div>
    <div class="water-level-chart">
      <div class="text pd10">累计收益</div>
      <dv-decoration-9 :dur="generDur" :color="['#67C23A','green']" style="width:120px;height:120px;">66</dv-decoration-9>
    </div>
  </div>
</template>
<script>
export default {
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
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
