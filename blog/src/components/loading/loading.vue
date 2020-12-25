<template>
  <div v-if="show" class="loading">
    <div class="loading-content"></div>
    <div style="color: white;position: absolute;top: 58%">{{text}}</div>
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
      }
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