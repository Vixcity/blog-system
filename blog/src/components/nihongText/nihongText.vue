<template>
  <div class="nihongText">
    <div :class="{'neon':className==='neon','flux':className==='flux'}">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "nihongText",
  props:['text','className'],
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>