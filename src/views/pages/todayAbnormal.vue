<template>
  <div class="today-abnorml">
    <title3>今日异常</title3>
    <dv-decoration-9 :dur="30" style="width:255px;height:255px;margin:0 auto">8</dv-decoration-9>
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

    }
  }
}
</script>
<style lang="less" scoped>
 .today-abnorml {
   margin: 10px 0;
   padding: 20px 0;
   background-color: rgba(6,30,93,.5);
   border-top: 2px solid rgba(1,153,209,.5);
 }
</style>
