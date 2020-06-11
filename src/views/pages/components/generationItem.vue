<template>
  <dv-border-box-13 style="width: 100%;height:100px">
    <div class="container flex-column">
      <div class="title-line">
        <div class="title">{{title}}</div>
        <dv-decoration-2 style="width:150px;height:5px;" />
      </div>
      <div class="title-value">
        <div class="detail">
          <span>{{value}}</span>
          <span class="unit">{{unit}}</span>
        </div>
      </div>
    </div>
  </dv-border-box-13>
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
  },
  props: {
    title: {
      default: '未知'
    },
    value: {
      default: 0
    },
    unit: {
      default: 'kW·h'
    }
  }
}
</script>
<style lang="less" scoped>
.dv-border-box-13 {
  padding: 10px 0px 10px 20px;
}
.container {
  height: 100%;
  width: 100%;
}
.title-line {
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  .title {
    margin: 10px 0 5px;
  }
}
.title-value {
  flex: 1;
  font-size: 30px;
  color: #1EF3FF;
  font-weight: bold;
  display: flex;
  align-items: center;
  .unit {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>
