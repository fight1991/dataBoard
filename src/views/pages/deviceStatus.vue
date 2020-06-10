<template>
  <div class="device-status">
    <title3>设备状态</title3>
    <dv-capsule-chart :config="config" style="width:380px;height:200px" />
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
 .device-status {
   margin: 10px 0;
   padding: 20px 0;
   background-color: rgba(6,30,93,.5);
   border-top: 2px solid rgba(1,153,209,.5);
 }
</style>
