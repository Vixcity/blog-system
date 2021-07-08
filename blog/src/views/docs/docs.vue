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
      this.$api.getDocsList().then(r=>{
        this.docs = r.data
      })
      this.$api.getDocsBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
      })
    },
  },
}
</script>

<style scoped>

</style>