<template>
  <!--banner图
    --绑定 imgSrc
    --    title
  -->
  <div class="contentBanner">
    <img :src="imgSrc" alt="">
    <div class="page-site-info">
      <h1 id="site-title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentBanner",
  props:['imgSrc','title'],
}
</script>

<style scoped>

</style>