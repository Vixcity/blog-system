<template>
  <vuescroll>
    <div class="moreDemo">
      <contentBanner :imgSrc="bannerSrc" :title="title" />
      <div class="container">
        <div class="page">
          <div class="moreDemo-lists">
            <div class="moreDemo-title is-center">
              {{ title }} -
              <span class="category-amount">{{ moreDemoList.length-1 }}</span>
            </div>
            <div style="margin-top:.3rem">
              <ul class="moreDemo-list">
                <li v-for="(item,index) in moreDemoList" :key="index" @click="clickDemo(index,item)"><a href="javascript:void(0);" :style="item.style">{{ item.title }}</a></li>
              </ul>
            </div>
            <hr :class="{
              'cyberpunkLine':( showDemo === 6 || showDemo === 5 ),
              'lightHr':( showDemo === 3 || showDemo === 4 ),
              'tabsHr':(showDemo === 10 || showDemo === 11 || showDemo === 12 || showDemo === 13 || showDemo === 14)
            }">
            <div class="showDemos">
              <div v-if="showDemo==0">
                <lightButton text="黑夜模式下" :color="{'--i': 1}"/>
                <lightButton text="食用效果更佳" :color="{'--i': 2}"/>
                <lightButton text="测试按钮" :color="{'--i': 3}"/>
                <lightButton text="测试按钮" :color="{'--i': 4}"/>
                <lightButton text="测试按钮" :color="{'--i': 5}"/>
              </div>
              <div v-if="showDemo==1">
                <lightButton text="loading效果1" @click.native="showLoading(1,3000)" :color="{'--i': 4}" />
                <lightButton text="loading效果2" @click.native="showLoading(2,6000)" :color="{'--i': 3}" />
                <lightButton text="loading效果3" @click.native="showLoading(3,4000)" :color="{'--i': 2}"/>
              </div>
              <div v-if="showDemo==2">
                <div style="display: flex;justify-content: center;align-items: center">
                  <hoverButton
                      :icon="['iconfont icon-logo_gitee_icon',
                          'iconfont icon-github',
                          'iconfont icon-INS',
                          'iconfont icon-ttww',
                          'iconfont icon-weixin']"
                      :color="['#cd4a38',
                        'rgb(0, 0, 0)',
                        '#bf00ff',
                        '#00a4ee',
                        '#04BE02']"
                      type="1"
                  />
                </div>
                <div style="display: flex;justify-content: center;align-items: center;margin-top: .4rem">
                  <hoverButton
                      :type="2"
                  />
                </div>
              </div>
              <div v-if="showDemo==3" class="hoverLightButton">
                <hoverLightButton text="loading效果1" @click.native="showLoading(1,3000)"/>
              </div>
              <div v-if="showDemo==4">
                <colorful/>
              </div>
              <div v-if="showDemo==5">
                <saibopengke/>
              </div>
              <div v-if="showDemo==6">
                <cyberpunkTitle/>
              </div>
              <div v-if="showDemo==7">
                <caizhi/>
              </div>
              <div v-if="showDemo==8">
                <nihongText text="霓虹文字效果1,请在黑夜模式下观看" className="neon"/>
                <nihongText text="霓虹文字效果2,请在黑夜模式下观看" style="margin-top:.2rem;" className="flux"/>
              </div>
              <div v-if="showDemo==9">
                <codeRain/>
              </div>
              <div v-if="showDemo==10">
                <toDoList :list="ToDoList"/>
              </div>
              <div v-if="showDemo==11">
                <toggle v-model="value"/>
              </div>
              <div v-if="showDemo==12">
                <MateInput label="欢迎光临Vixcity的个人小站"/>
              </div>
              <div v-if="showDemo==13">
                <ImageCropper @filesend="imgChange(arguments)"/>
              </div>
              <div v-if="showDemo==14">
                <ColorfulTabs @filesend="imgChange(arguments)"/>
              </div>
              <div v-if="showDemo==15">
                <NumProgress :send-num="70" :max-num="100" />
              </div>
            </div>
          </div>
        </div>
        <asideContent />
      </div>
    </div>
  </vuescroll>
</template>

<script>
import asideContent from "../../components/asideContent/asideContent";
import contentBanner from "../../components/contentBanner/contentBanner";
import lightButton from "../../components/lightButton/lightButton";
import hoverButton from "../../components/hoverButton/hoverButton";
import hoverLightButton from "../../components/hoverLightButton/hoverLightButton";
import colorful from "../../components/colorful/colorful";
import saibopengke from "../../components/saibopengke/saibopengke";
import cyberpunkTitle from "../../components/cyberpunkTitle/cyberpunkTitle";
import caizhi from "../../components/caizhi/caizhi";
import nihongText from "../../components/nihongText/nihongText";
import codeRain from "../../components/codeRain/codeRain";
import toDoList from "../../components/toDoList/toDoList";
import toggle from "../../components/toggle/toggle";
import MateInput from "../../components/MateInput/MateInput";
import ImageCropper from "../../components/ImageCropper/ImageCropper";
import ColorfulTabs from "../../components/colorfulTabs/colorfulTabs";
import NumProgress from "../../components/NumProgress/NumProgress";
import vuescroll from 'vuescroll'

export default {
  name: "moreDemo",
  components:{
    hoverButton,
    contentBanner,
    asideContent,
    lightButton,
    hoverLightButton,
    colorful,
    saibopengke,
    cyberpunkTitle,
    caizhi,
    nihongText,
    codeRain,
    toDoList,
    toggle,
    MateInput,
    ImageCropper,
    ColorfulTabs,
    NumProgress,
    vuescroll,
  },
  created() {
    for(let i in this.moreDemoList){
      this.moreDemoList[i].style={
        color:this.$.randomColor(),
        fontSize:this.$.random(24,12)+'px'
      }
    }
  },
  mounted() {
    this.ready()
    this.$('.__vuescroll').css('height','100vh')
  },
  data() {
    return{
      showDemo:null,
      bannerSrc:'http://img2.zol.com.cn/product/93/902/ce4q2hEbUkT6.jpg',
      title:'更多示例',
      moreDemoList:[
        {
          title:'悬停发光按钮',
        },
        {
          title:'加载动画',
        },
        {
          title:'悬停按钮',
        },
        {
          title:'流光按钮',
        },
        {
          title:'移入移出效果'
        },
        {
          title:'赛博朋克效果',
        },
        {
          title:'赛博朋克标题效果',
        },
        {
          title:'材质效果',
        },
        {
          title:'霓虹文字效果',
        },
        {
          title:'代码雨效果',
        },
        {
          title:'ToDoList',
        },
        {
          title:'开关效果',
        },
        {
          title:'好看的输入框效果',
        },
        {
          title:'上传头像组件',
        },
        {
          title:'标签切换',
        },
        {
          title:'进度条动画',
        },
        {
          title:'关闭所有显示效果',
        },
      ],
      ToDoList:[
        {
          name: '选择第一个',
          value: '1'
        },
        {
          name: '选择第二个',
          value: '2'
        },
        {
          name: '选择第三个',
          value: '3'
        }
      ],
      value:false,
    }
  },
  methods:{
    ready() {
      console.log('%c青山看不厌，\n流水趣何长。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #005CAF;font-wight:700;font-size:35px");
      this.$api.getMoreDemoTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getMoreDemoBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ this.bannerSrc +") no-repeat center center;padding-left:480px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
      })
    },
    clickDemo(index,item){
      if(item.title=='关闭显示效果'){
        this.showDemo = null
      }
      this.showDemo = index
    },
    showLoading(num,time){
      // 加载动画显示
      this.$loading.show(
          {
            text:'正在加载中...',
            type:num
          }
      )
      setTimeout(()=>{
        this.$loading.hide()
      },time)
    },
    imgChange(blob) {
      const elink = document.createElement('a');
      elink.download = blob[2];
      elink.style.display = 'none';
      elink.href = URL.createObjectURL(blob[1]);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); //释放URL对象
      document.body.removeChild(elink);
    }
  }
}
</script>

<style scoped>

</style>
