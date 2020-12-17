<template>
  <!--banner图
    --绑定 imgSrc
    --    title
  -->
  <div class="contentBanner" :style="styles">
    <div class="page-site-info">
      <h1 id="site-title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentBanner",
  props:['imgSrc','title'],
  created() {
    // let isLight = localStorage.setItem('isLight', this.isLight)
  },
  mounted() {
    this.styles['background-image'] = 'url(' + this.imgSrc || this.styles['background-image'] + ')'
  },
  data(){
    return{
      styles:{
        "background-image":"url('https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg')",
        "position": "relative",
        "width": "100%",
        "background-color": "#49b1f5",
        "background-position": "center center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "transition": "all .5s"
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>