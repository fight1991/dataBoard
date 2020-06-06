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
        <div>
          <dv-scroll-board :config="list" style="width:500px;height:220px" />
        </div>
      </div>
    </dv-border-box-11>
  </dv-full-screen-container>
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
      },
      list: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ],
        index: true,
        columnWidth: [50],
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
