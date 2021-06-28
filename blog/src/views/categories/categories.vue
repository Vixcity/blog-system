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
            <ul class="category-list">
              <li v-for="(item,index) in categories" :key="index" class="category-list-item">
                <a :href="item.href" class="category-list-link">{{ item.title }}</a>
                <span class="category-list-count">({{ item.count }})</span>
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
  name: "categories",
  components:{
    contentBanner,
    asideContent
  },
  mounted() {
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
      this.$api.getCategoriesBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
      })
    },
  },
}
</script>

<style scoped>

</style>