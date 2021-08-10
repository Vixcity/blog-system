<template>
  <div class="codeRain">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "loading",
    watch:{
      show(newVal) {
        if (newVal){
          document.getElementsByTagName('body')[0].style.overflow='hidden'
          return
        }
        document.getElementsByTagName('body')[0].style.overflow=''
      }
    },
    mounted(){
        
    }
  }
</script>

<style scoped>

</style>