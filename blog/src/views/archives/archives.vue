<template>
  <vuescroll>
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
      <asideContent url='archives' />
    </div>
  </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"
import vuescroll from 'vuescroll'

export default {
  name: "archives",
  components:{
    contentBanner,
    asideContent,
    vuescroll
  },
  data(){
    return{
      timeData:[],
      bannerSrc:'',
      title:'归档',
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
    this.ready(),
    this.$('.__vuescroll').css('height','100vh')
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
      console.log('%c惊风飘白日,\n光景西驰流。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: red;font-wight:700;font-size:35px");
      this.$api.getTimeDate().then(r=>{
        this.timeData = r.data
      })
      this.$api.getArchivesTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getArchivesBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat 60% center;padding-left:400px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
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