<template>
  <div class="moreDemo">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="moreDemo-lists">
          <div class="moreDemo-title is-center">
            {{ title }} -
            <span class="category-amount">{{ moreDemoList.length-1 }}</span>
          </div>
          <div>
            <ul class="moreDemo-list">
              <li v-for="(item,index) in moreDemoList" :key="index" @click="clickDemo(index,item)"><a href="javascript:void(0);" :style="item.style">{{ item.title }}</a></li>
            </ul>
          </div>
          <hr>
          <div class="showDemos">
            <div v-if="showDemo==0">
              <lightButton text="黑夜模式下" :color="{'--i': 1}"/>
              <lightButton text="食用效果更佳" :color="{'--i': 2}"/>
              <lightButton text="测试按钮" :color="{'--i': 3}"/>
              <lightButton text="测试按钮" :color="{'--i': 4}"/>
              <lightButton text="测试按钮" :color="{'--i': 5}"/>
            </div>
            <div v-if="showDemo==1">
              <lightButton text="loading效果" @click.native="showLoading()" :color="{'--i': 4}" />
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <asideContent />
    </div>
  </div>
</template>

<script>
import asideContent from "../../components/asideContent/asideContent";
import contentBanner from "../../components/contentBanner/contentBanner";
import lightButton from "../../components/lightButton/lightButton";
import hoverButton from "../../components/hoverButton/hoverButton";
import { randomColor,random } from '../../utils/common'

export default {
  name: "moreDemo",
  components:{
    hoverButton,
    contentBanner,
    asideContent,
    lightButton
  },
  created() {
    for(let i in this.moreDemoList){
      this.moreDemoList[i].style={
        color:this.randomColor(),
        fontSize:this.random(24,12)+'px'
      }
    }
  },
  data() {
    return{
      randomColor,
      random,
      showDemo:null,
      bannerSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/Photo/categories.jpg',
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
          title:'关闭所有显示效果',
        }
      ]
    }
  },
  methods:{
    clickDemo(index,item){
      if(item.title=='关闭显示效果'){
        this.showDemo = null
      }
      this.showDemo = index
    },
    showLoading(){
      // 加载动画显示
      this.$loading.show(
          {
            text:'正在加载中...',
          }
      )
      setTimeout(()=>{
        this.$loading.hide()
      },2000)
    }
  }
}
</script>

<style scoped>

</style>
