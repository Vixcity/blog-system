<template>
  <div class="archives">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="containers">
        <div class="archivesHeader flex">
          <h1>{{subTitle.leftTitle}}</h1>
          <i class="iconfont icon-Clock"></i>
          <h1>{{subTitle.rightTitle}}</h1>
        </div>
        <div class="archivesBody">
          <div class="timeline-line"></div>
          <div v-for="(item,index) in this.timeData" :key="index" class="year">
            <a href="javascript:void(0)" @click="changeHeight">
              <h1>{{item.year}}<i></i></h1>
            </a>
            <ul class="times">
              <li v-for="(value,index) in item.dataInfo" :key="index" class="flex" :class="{light:value.isLight}">
                <a :href="value.href"><h2>{{value.data}}</h2></a>
                <i class="iconfont icon-center"></i>
                <div class="dataContent">
                  <a :href="value.href">
                    <h3 class="title">{{value.title}}</h3>
                    <p class="summary">{{value.summary}}</p>
                  </a>
                </div>
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
  name: "archives",
  components:{
    contentBanner,
    asideContent
  },
  data(){
    return{
      timeData:[],
      bannerSrc:'',
      title:'',
      subTitle:{},
    }
  },
  created() {
    this.$nextTick(()=>{
      var uls = document.getElementsByClassName('times')
      for (let i in uls) {
        let ul = uls[i]
        ul.style.height = ul.offsetHeight+'px';
      }
    })
  },
  mounted() {
    this.ready()
  },
  methods: {
    changeHeight(e){
      for(let i in e.path) {
        if (e.path[i].className == 'year'){
          e.path[i].className='year close'
        } else if(e.path[i].className =='year close'){
          e.path[i].className='year'
        }
      }
    },
    ready() {
      this.$api.getTimeDate().then(r=>{
        this.timeData = r.data
      })
      this.$api.getArchivesTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getArchivesBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
      })
      this.$api.getArchivesSubTitle().then(r=>{
        this.subTitle = r.data
      })
    }
  },
}
</script>

<style scoped>

</style>