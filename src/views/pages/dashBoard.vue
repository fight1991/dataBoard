<template>
  <dv-full-screen-container>
    <dv-border-box-11 title="监控系统">
      <div class="all-container">
      <!-- 当前功率 -->
        <div class="plant-status flex">
          <div class="water-level-chart">
            <div class="text pd10">当前功率 <span>70kw/h</span></div>
            <dv-water-level-pond class="power-img" :config="config" style="width:200px;height:200px" />
          </div>
        </div>
      </div>
    </dv-border-box-11>
  </dv-full-screen-container>
</template>

<script>
export default {
  data () {
    return {
      config: {
        data: [30],
        shape: 'round'
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
  border: 10px solid #19c3eb;
  border-radius: 50%;
}
.water-level-chart {
  background-color: rgba(6,30,93,.5);
  border-top: 2px solid rgba(1,153,209,.5);
  font-size: 20px;
  text-align: center;
  .text span {
    font-size: 30px;
    font-weight: 700;
    color: #58a1ff;
    margin-bottom: -5px;
  }
}
</style>
