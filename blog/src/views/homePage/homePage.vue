<template>
  <div class="home">
    <div class="banner">
      <div class="site-info">
        <h1 class="site-title">
          <span>{{contentInfo.title}}</span>
        </h1>
        <div class="site-subtitle">
          <div class="beforeTyped">
            <span id="typed" class="typed-cursor"></span>  
          </div>
        </div>
      </div>
      <div class="bannerDown" @click="scrollTo">
        <i class="iconfont icon-xiajiantou"></i>
      </div>
      <img src="../../assets/image/homePage/backgroundBanner.jpg" alt="">
    </div>
    <div class="container">
     <div class="outer">
       <div class="notice" style="margin-top:.5rem">
        <i class="iconfont icon-xinaixin-fubenbeifen"></i>
        <div class="notice-content">
          {{contentInfo.noticeContent}}
        </div>
      </div>
      <article>
        <article v-for="(item,index) in contentInfo.articleTypePost" :key="index" class="article">
          <div class="article-inner">
            <div class="article-header">
              <h2>
                <a class="article-title" :href="item.href">{{item.title}}<i class="article-topping" v-if="item.isTopping">置顶</i></a>
              </h2>
            </div>
            <div class="article-meta">
              <a :href="item.href" class="article-date">
                <i class="iconfont icon-riqiqishu"></i>
                <time>{{item.createData}}</time>
              </a>
              <div class="article-category">
                <i class="iconfont icon-leibie"></i>
                <span v-for="(o,i) in item.tags" :key="i">
                  <a :href="o.href" class="article-category-link">{{o.tag}}</a>
                  <span v-if="item.tags.length!=1 && i!=item.tags.length-1"> / </span>
                </span>
              </div>
            </div>
            <div class="article-entry">
              <div v-html="item.content">
              </div>
              <a class="article-more-link" :href="item.href">阅读更多...</a>
            </div>
            <footer class="article-footer">
              <ul class="article-tag-list">
                <i class="iconfont icon-biaoqian" style="margin-right:.1rem;"></i>
                <li class="article-tag-list-item" v-for="(o,i) in item.tags" :key="i">
                  <a :href="o.href" class="article-tag-list-link">{{o.tag}}</a>
                </li>
              </ul>
            </footer>
          </div>
        </article>
      </article>
     </div>
     <AsideContent></AsideContent>
    </div>
  </div>
</template>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
import AsideContent from "../../components/asideContent/asideContent"
import Typed from  'typed.js'
import moment from 'moment'

export default {
  name: "homePage",
  components: {
    AsideContent
  },
  mounted() {
    this.ready()
  },
  data() {
    return {
      contentInfo:{
        title: 'Vixcity',
        typed: ['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today', '今日事，今日毕'],
        noticeContent: '最是人间留不住，朱颜辞镜花辞树',
        articleTypePost:[],
      },
      userInfoMsg:{}
    }
  },
  methods: {
    scrollTo(){
      document.getElementsByClassName('container')[0].scrollIntoView({behavior:'smooth'});
    },
    ready(){
      if(localStorage.getItem('browser')==='Chrome') {
        console.log("%c%c就知道阻挡不住你观看源码的冲动，但你至少要记住我！--Vixcity", "line-height:28px;", "line-height:28px;padding:4px 0px;color:#fff;font-size:16px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));color:#fff;-webkit-background-clip:text;");
      } else if (localStorage.getItem('browser')==='Firefox') {
        console.log("%c%c就知道阻挡不住你观看源码的冲动，但你至少要记住我！--Vixcity", "line-height:28px;", "line-height:28px;padding:4px 0px;color:#fff;font-size:16px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));color:transparent;-webkit-background-clip:text;");
      }
      console.log('%c鸟随鸾凤飞腾远,\n人伴贤良品自高。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: blue;font-wight:700;font-size:35px");
      console.log('%c最是人间留不住,\n朱颜辞镜花辞树。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #F05E1C;font-wight:700;font-size:35px");
      this.$api.getIp().then(r=>{
        //获取花括号里面的内容
        r = r.match(/(?<=\{)[^}]*(?=\})/)[0];
        r = JSON.parse('{'+r+'}')
        // console.log('cid:',r.cid,'\ncip:',r.cip,'\ncname',r.cname);
        // console.log(moment().format("YYYY/MM/DD 星期d HH:mm:ss"))
        this.userInfoMsg={
          ip:r.cip,
          date:moment().format("YYYY/MM/DD"),
          weekday:moment().format("d"),
          time:moment().format("HH:mm:ss")
        }
        this.$api.getUserIpInfo({
          key:'406812c6829086a8777d43ef0bc896d9',
          type:4,
          ip:this.userInfoMsg.ip
        }).then(r => {
          this.userInfoMsg.city=r.city
          this.userInfoMsg.country=r.country
          this.userInfoMsg.district=r.district
          this.userInfoMsg.isp=r.isp
          this.userInfoMsg.location=r.location
          this.userInfoMsg.province=r.province
          this.$api.postIpAndTime(this.userInfoMsg).then(r => {})
        })
      })
      this.$api.getTitle().then(r=>{
        this.contentInfo = r.data
        let options  =  { 
          strings: this.contentInfo.typed, 
          typeSpeed: 40,
          loop:true,
          typeSpeed:150,
          backSpeed:70,
          startDelay:100,
          backDelay:1500,
          shuffle:true,
          smartBackspace:true
        };
        new Typed('#typed', options);
      })
    }
  }
}
</script>

<style scoped>

</style>