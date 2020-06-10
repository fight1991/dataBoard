<template>
<div class="flex">
  <div class="title"><slot></slot></div>
  <dv-decoration-3 style="width:300px"></dv-decoration-3>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {}
}
</script>
<style lang="less" scoped>
.flex {
  align-items: center;
  margin-bottom: 20px;
}
.title {
  width: 100px;
  text-align: center;
  font-size: 18px;
  margin-left:10px;
  font-weight: bold;
}
</style>
