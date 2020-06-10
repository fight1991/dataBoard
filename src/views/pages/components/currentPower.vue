<template>
  <div class="current-power">
    <title3>当前功率</title3>
    <dv-water-level-pond :config="power" style="width:220px;height:220px;margin:0 auto;" />
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
        colors: ['#1EF3FF', '#fff'],
        waveNum: 6,
        waveHeight: 10
      }
    }
  }
}
</script>
<style lang="less" scoped>
.current-power {
  padding: 10px 0;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  background-color: rgba(6,30,93,.5);
  border-top: 2px solid rgba(1,153,209,.5);
  font-size: 20px;
  text-align: center;
  .text span {
    font-size: 18x;
    font-weight: 700;
    margin-bottom: -5px;
  }
}
</style>
