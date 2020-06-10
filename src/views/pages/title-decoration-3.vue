<template>
<div :style="{'width': width + 'px'}">
  <div class="title" :style="{'text-align':align}">
    <slot></slot>
  </div>
  <dv-decoration-3 :style="{'width':'100%','height':height + 'px'}"></dv-decoration-3>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    width: {
      default: 250
    },
    height: {
      default: 30
    },
    align: {
      default: 'center'
    }
  }
}
</script>
<style lang="less" scoped>
  .title {
    font-size: 16px;
    margin-right: 10px;
  }
</style>
