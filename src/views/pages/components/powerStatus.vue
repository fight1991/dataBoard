<template>
  <!-- 当前功率 -->
  <div class="plant-status flex-between">
    <generation-item class="item" title="今日发电" :value="incomeDetail.today"></generation-item>
    <generation-item class="item" title="本月发电" :value="incomeDetail.month"></generation-item>
    <generation-item class="item" title="累计发电" :value="incomeDetail.cumulate"></generation-item>
    <generation-item class="item" title="累计收益" :value="incomeDetail.earnings.value" :unit="incomeDetail.earnings.currency"></generation-item>
  </div>
</template>
<script>
import generationItem from './generationItem'
export default {
  components: {
    generationItem
  },
  data () {
    return {}
  },
  props: {
    incomeDetail: {
      default () {
        return {
          today: 0,
          month: 0,
          cumulate: 0,
          earnings: {
            currency: '-',
            value: 0
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.plant-status {
  .item {
    width: 22%;
  }
}
</style>
