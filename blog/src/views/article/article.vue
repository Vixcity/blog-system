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
              <div class="article-content" v-html="content"></div>
              <div class="post-actions">
                <a href="javascript:;" etap="like" class="post-like action action-like" data-pid="72858">
                  <i class="iconfont icon-zan" style="margin-right: .07rem"></i>赞(<span>35</span>)
                </a>
              </div>
              <div class="post-copyright">本站文章未说明转载即为原创，转载请注明，<a href="https://fuliba2021.net">Vixcity</a> » <a href="https://fuliba2021.net/99.html">{{ title }}</a></div>
              <div class="article-tags"><i class="iconfont icon-biaoqian" style="margin-right: 0.1rem;"></i><a href="https://fuliba2021.net/tag/%e8%b4%ad%e7%89%a9%e7%be%a4" rel="tag">购物群</a></div>
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
      content:''
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
      this.$api.getArticleContent().then(r=>{
        this.content = r.data.content
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