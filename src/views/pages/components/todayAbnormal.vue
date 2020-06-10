<template>
  <div class="today-abnorml">
    <title3>今日异常</title3>
    <dv-decoration-9 :dur="30" :color="['#FFDB5C', '#C23531']" style="width:255px;height:255px;margin:0 auto"><span>8</span></dv-decoration-9>
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
   margin-bottom: 10px;
   padding: 20px 0;
   background-color: rgba(6,30,93,.5);
   border-top: 2px solid rgba(1,153,209,.5);
   span {
     color: #F96867;
     font-size: 26px;
   }
 }
</style>
