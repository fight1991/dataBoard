<template>
  <div>
    <title3>当前功率</title3>
    <dv-water-level-pond :config="power" style="width:200px;height:200px;margin:0 auto;" />
  </div>
</template>
<script>
import title3 from './title-decoration-3'
export default {
  components: {
    title3
  },
  data () {
    return {
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

</style>
