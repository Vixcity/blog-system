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
            <hr>
            <a v-for="(item,index) in tags" :key="index" :href="item.href" :style="item.style">{{item.tagName}}</a>
          </div>
        </div>
      </div>
      <asideContent url='tags'/>
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
    console.log('%c银鞍照白马，\n飒沓如流星。\n十步杀一人，\n千里不留行。\n事了拂衣去，\n深藏身与名。\n闲过信陵饮，\n脱剑膝前横。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #FFB11B;font-wight:700;font-size:35px");
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
      this.$api.getTagsTitle().then(r=>{
        this.title = r.data.title
      })
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
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat 40% 70%;padding-left:480px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
      })
    }
  },
}
</script>

<style scoped>

</style>