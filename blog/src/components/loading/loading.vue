<template>
  <div v-if="show" class="loading">
    <div v-if="type==1">
      <div class="loading-content1"></div>
      <div style="color: white;position: absolute;top: 58%">{{text}}</div>
    </div>
    <div class="loading2" v-if="type==2">
      <div class="loading-content2">
        <div class="ball"></div>
      </div>
      <div style="color: white;position: absolute;top: 60%;left: 55%;transform: translateX(-50%)">{{text}}</div>
    </div>
    <div class="loading3" v-if="type==3">
      <div class="loding-content3">
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
    props:{
      show:Boolean,
      text:{
        type:String,
        default:'正在加载中...'
      },
      type:Number
    },
    watch:{
      show(newVal) {
        if (newVal){
          document.getElementsByTagName('body')[0].style.overflow='hidden'
          return
        }
        document.getElementsByTagName('body')[0].style.overflow=''
      }
    }
  }
</script>

<style scoped>

</style>