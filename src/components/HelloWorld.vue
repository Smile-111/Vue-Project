<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="primary">主要按钮</van-button>

  </div>
</template>

<script>
import {HomeApi} from "../request/api";
export default {
  data () {
    return {

 
    }
  },
  created(){
    HomeApi().then(res=>{
      console.log(res);
    })
  }
}
</script>
 
<style lang = "less" scoped>
  
</style>