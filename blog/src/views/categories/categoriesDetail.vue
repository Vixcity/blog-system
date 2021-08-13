<template>
  <vuescroll>
    <div class="categories">
      <contentBanner :imgSrc="bannerSrc" :title="category" />
      <div class="container">
        <div class="page">
          <div class="category-lists">
            <div class="category-title is-center">
              {{ category }} -
              <span class="category-amount">{{ categories.length }}</span>
            </div>
            <div>
              <hr>
              <ul class="category-list">
                <li v-for="(item,index) in categories" :key="index" class="category-list-item">
                  <a :href="item.href" class="category-list-link">
                    {{ item.title }}
                    <span v-show="item.count" class="category-list-count">({{ item.count }})</span>
                    <span v-show="!item.count" class="category-list-count-detail"><i class="iconfont icon-pinglun"></i>{{ item.commentCount }}</span>
                    <span v-show="!item.count" class="category-list-count-detail"><i class="iconfont icon-zan"></i>{{ item.zanCount }}</span>
                    <span v-show="!item.count" class="category-list-count-detail"><i class="iconfont icon-riqiqishu"></i>{{ item.time }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <asideContent url='categories'/>
      </div>
    </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"
import vuescroll from 'vuescroll'

export default {
  name: "categories",
  components:{
    contentBanner,
    asideContent,
    vuescroll
  },
  mounted() {
    this.category = this.$route.params.id
    this.ready(),
    this.$('.__vuescroll').css('height','100vh')
  },
  data() {
    return{
      category:'',
      bannerSrc:'',
      title:'分类',
      categories:[]
    }
  },
  methods: {
    ready() {
      console.log('%c关山难越，\n谁悲失路之人？\n\n萍水相逢，\n尽是他乡之客。','font-family:演示夏行楷,缘缘体行书,华文行楷;color: #B5495B;font-wight:700;font-size:35px')
      this.$api.getCategoriesList({category:this.category}).then(r=>{
        this.categories = r.data
      })
      this.$api.getCategoriesTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getCategoriesBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat center center;padding-left:400px;padding-bottom: 400px;")
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