<template>
  <vuescroll>
    <div class="amusement">
      <contentBanner :imgSrc="bannerSrc" :title="title" />
      <div class="container">
        <div class="page">
          <div class="amusement-lists">
            <div class="amusement-title is-center">
              {{ title }} -
              <span class="amusement-amount">{{ imageList.length }}</span>
            </div>
            <div>
              <hr>
              <div id="lightgallery">
                <a v-for="(item,index) in imageList" :href="item" :key="index">
                  <img :src="item" >
                </a>
              </div>
            </div>
          </div>
        </div>
        <asideContent />
      </div>
    </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"
import vuescroll from 'vuescroll'

export default {
  name: 'amusement',
  components:{
    contentBanner,
    asideContent,
    vuescroll
  },
  mounted() {
    this.ready()
    this.$('.__vuescroll').css('height','100vh')
    setTimeout(() => {
      const el = document.getElementById('lightgallery')
      window.lightGallery(el,{download:true})
      console.log()
    }, 500);
  },
  data() {
    return {
      bannerSrc:'',
      title:'娱乐 - 摄影 - 美图',
      imageList: []
    }
  },
   methods: {
    ready() {
      console.log('%c浮云一别后，\n流水十年间。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #B5495B;font-wight:700;font-size:35px");
      this.$api.getAmusementImageListList().then(r=>{
        this.imageList = r.data
      })
      this.$api.getAmusementTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getAmusementBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat 70% center;padding-left:480px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
      })
    },
  },
}
</script>

<style scoped>

</style>