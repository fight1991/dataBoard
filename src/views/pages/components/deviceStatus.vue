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
  props: {
    deviceStatus: {
      default: {}
    }
  },
  data () {
    return {
      config: {
        showValue: true,
        data: [
          {
            name: '总数',
            value: 0
          },
          {
            name: '正常',
            value: 0
          },
          {
            name: '故障',
            value: 0
          },
          {
            name: '离线',
            value: 0
          }
        ]
      }
    }
  },
  watch: {
    deviceStatus: {
      handler: function (newData) {
        if (newData) {
          Object.values(this.deviceStatus).forEach((v, i) => {
            this.config.data[i]['value'] = v
          })
        }
      },
      deep: true
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
