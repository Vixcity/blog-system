<template>
  <div class="app-container">
    <div id="lightgallery">
      <a v-for="(item,index) in imageList" :href="item" :key="index">
        <img style="width:400px" :src="item" >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'amusement',
  data() {
    return {
      imageList: ["https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-6-lg.jpg","https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-12-lg.jpg"]
    }
  },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el,{download:false})
  }
}
</script>

<style scoped>

</style>