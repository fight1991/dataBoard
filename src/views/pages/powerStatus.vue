<template>
  <!-- 当前功率 -->
  <div class="plant-status flex-between">
    <generation-item class="item" title="今日发电" value="100"></generation-item>
    <generation-item class="item" title="本月发电" value="100"></generation-item>
    <generation-item class="item" title="累计发电" value="100"></generation-item>
    <generation-item class="item" title="累计收益" value="100" unit="CNY"></generation-item>
  </div>
</template>
<script>
import generationItem from './generationItem'
export default {
  components: {
    generationItem
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
      }
    }
  }
}
</script>
<style lang="less" scoped>
.plant-status {
  .item {
    width: 20%;
  }
}
</style>
