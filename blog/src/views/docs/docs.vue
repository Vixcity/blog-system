<template>
  <div class="docs">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="docs-lists">
          <div class="docs-title is-center">
            {{ title }} -
            <span class="docs-amount">{{ docs.length }}</span>
          </div>
          <div>
            <ul class="docs-list">
              <li v-for="(item,index) in docs" :key="index" class="docs-list-item">
                <a :href="item.href" class="docs-list-link">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <asideContent />
    </div>
  </div>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"

export default {
  name: "docs",
  components:{
    contentBanner,
    asideContent
  },
  mounted() {
    console.log('%c台隍枕夷夏之交，\n宾主尽东南之美。',"line-height:30px;font-family:演示夏行楷,缘缘体行书,华文行楷;color: #3d6167;font-wight:700;font-size:35px");
    this.ready()
  },
  data() {
    return{
      bannerSrc:'',
      title:'文档',
      docs:[]
    }
  },
  methods: {
    ready() {
      this.$api.getDocsTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getDocsList().then(r=>{
        this.docs = r.data
      })
      this.$api.getDocsBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat center center;padding-left:480px;padding-bottom: 400px;")
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