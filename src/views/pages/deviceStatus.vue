<template>
  <div>
    <title3 align="right" class="fr">设备状态</title3>
    <dv-capsule-chart :config="config" style="width:100%;height:150px" />
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
      config: {
        showValue: true,
        data: [
          {
            name: '总数',
            value: 167
          },
          {
            name: '正常',
            value: 67
          },
          {
            name: '故障',
            value: 123
          },
          {
            name: '离线',
            value: 55
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
 .unit-label {
   display: none;
 }
</style>
