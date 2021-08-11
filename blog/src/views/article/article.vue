<template>
  <vuescroll>
    <div class="article">
      <contentBanner :imgSrc="bannerSrc" :title="title" />
      <div class="container">
        <div class="page">
          <div class="article-lists">
            <div class="article-title is-center">
              {{ title }}
              <br />
              <span class="article-meta">{{ time }}</span>
              <span class="article-meta"> <i class="iconfont icon-leibie"></i> <a v-for="(o,i) in categories" :key="i" :href="o.href">{{ o.categorie }}</a></span>
              <span class="article-meta">评论（{{ commentCount }}）</span>
            </div>
            <hr>
            <div>
              <div v-if="isUpdata" class="article-update-tips">本文于 {{ updataTime }} 更新，注意查看新内容</div>
            </div>
          </div>
        </div>
        <asideContent url='article'/>
      </div>
    </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"
import vuescroll from 'vuescroll'

export default {
  name: "myArticle",
  components:{
    contentBanner,
    asideContent,
    vuescroll
  },
  mounted() {
    this.ready(),
    this.$('.__vuescroll').css('height','100vh')
  },
  data() {
    return{
      bannerSrc:'',
      title:'文章',
      time:'',
      isUpdata:'',
      commentCount:'',
      updataTime:'',
      categories:'',
      article:[]
    }
  },
  methods: {
    ready() {
      console.log('%c台隍枕夷夏之交，\n宾主尽东南之美。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #3d6167;font-wight:700;font-size:35px");
      this.$api.getArticleTitle().then(r=>{
        this.title = r.data.title
        this.time = r.data.time
        this.commentCount = r.data.commentCount
        this.categories = r.data.categories
        this.updataTime = r.data.updataTime
        this.isUpdata = r.data.isUpdata
      })
      this.$api.getDocsList().then(r=>{
        this.article = r.data
      })
      this.$api.getArticlesBannerSrc().then(r=>{
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