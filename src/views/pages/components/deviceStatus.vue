<template>
  <div class="device-status">
    <title3>设备状态</title3>
    <dv-capsule-chart :config="config" style="width:100%;height:200px" />
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
            value: 157
          },
          {
            name: '正常',
            value: 127
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
 .device-status {
   padding: 20px 0;
   background-color: rgba(6,30,93,.5);
   border-top: 2px solid rgba(1,153,209,.5);
 }
</style>
