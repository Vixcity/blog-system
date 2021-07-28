<template>
  <div class="categories">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="category-lists">
          <div class="category-title is-center">
            {{ title }} -
            <span class="category-amount">{{ categories.length }}</span>
          </div>
          <div>
            <hr>
            <ul class="category-list">
              <li v-for="(item,index) in categories" :key="index" class="category-list-item">
                <a :href="item.href" class="category-list-link">{{ item.title }}<span class="category-list-count">({{ item.count }})</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <asideContent url='categories'/>
    </div>
  </div>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"

export default {
  name: "categories",
  components:{
    contentBanner,
    asideContent
  },
  mounted() {
    console.log('%c关山难越，\n谁悲失路之人？\n\n萍水相逢，\n尽是他乡之客。','font-family:演示夏行楷,缘缘体行书,华文行楷;color: #B5495B;font-wight:700;font-size:35px')
    this.ready()
  },
  data() {
    return{
      bannerSrc:'',
      title:'分类',
      categories:[]
    }
  },
  methods: {
    ready() {
      this.$api.getCategoriesList().then(r=>{
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