<template>
  <div class="tags">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="category-lists">
          <div class="tag-cloud-title is-center">
            {{ title }} -
            <span class="tag-cloud-amount">{{ tags.length }}</span>
          </div>
          <div class="tag-cloud-list is-center">
            <a v-for="(item,index) in tags" :key="index" :href="item.href" :style="item.style">{{item.tagName}}</a>
          </div>
        </div>
      </div>
      <asideContent />
    </div>
  </div>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner";
import asideContent from "../../components/asideContent/asideContent";

export default {
  name: "tags",
  components:{
    contentBanner,
    asideContent
  },
  mounted() {
    this.ready()
  },
  data() {
    return{
      title:'标签',
      bannerSrc:'',
      tags:[]
    }
  },
  methods:{
    ready() {
      this.$api.getTagsList().then(r => {
        this.tags = r.data
        for(let i in this.tags){
          this.tags[i].style={
            color:this.$.randomColor(),
            fontSize:this.$.random(24,12)+'px'
          }
        }
      })
      this.$api.getTagsBannerSrc().then(r => {
        this.bannerSrc = r.data.url
      })
    }
  },
}
</script>

<style scoped>

</style>