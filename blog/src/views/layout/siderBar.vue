<template>
  <div class="siderBar" @click="siderBarClick">
    <div style="height:100%;">
      我是侧边栏
      <div style="background:red;width:100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "siderBar",
  data() {
    return {
      
    }
  },
  methods: {
    siderBarClick(e) {
      e.stopPropagation()
    }
  },
}
</script>

<style scoped>

</style>