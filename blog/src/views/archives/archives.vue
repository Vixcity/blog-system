<template>
  <div class="archives">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="containers">
        <div class="archivesHeader flex">
          <h1>时间线</h1>
          <i class="iconfont icon-Clock"></i>
          <h1>奥义-时光倒流之术</h1>
        </div>
        <div class="archivesBody">
          <div class="timeline-line"></div>
          <div v-for="(item,index) in this.timeData" :key="index" class="year">
            <a href="javascript:void(0)" @click="changeHeight">
              <h1>{{item.year}}<i></i></h1>
            </a>
            <ul class="times">
              <li v-for="value in item.dataInfo" :key="value" class="flex" :class="{light:value.isLight}">
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
      timeData:[
        {
          year: '2020',
          dataInfo: [
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:true
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            }
          ]
        },
        {
          year: '2020',
          dataInfo: [
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:true
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            }
          ]
        }
      ],
      bannerSrc:'https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg',
      title:'归档'
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
  methods: {
    changeHeight(e){
      for(let i in e.path) {
        if (e.path[i].className == 'year'){
          e.path[i].className='year close'
        } else if(e.path[i].className =='year close'){
          e.path[i].className='year'
        }
      }
    }
  },
}
</script>

<style scoped>

</style>