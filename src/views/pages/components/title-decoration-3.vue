<template>
<div class="flex">
  <div class="title"><slot></slot></div>
  <div class="dv-3"><dv-decoration-3></dv-decoration-3></div>
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
.dv-3 {
  flex: 1;
}
</style>
