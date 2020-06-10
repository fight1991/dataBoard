<template>
  <dv-water-level-pond class="power-img" :config="power" style="width:120px;height:120px" />
</template>
<script>
export default {
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
.power-img {
  // border: 10px solid #19c3eb;
  border-radius: 50%;
}
</style>
