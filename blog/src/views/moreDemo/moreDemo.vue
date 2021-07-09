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
import hoverLightButton from "../../components/hoverLightButton/hoverLightButton";
import colorful from "../../components/colorful/colorful";

export default {
  name: "moreDemo",
  components:{
    hoverButton,
    contentBanner,
    asideContent,
    lightButton,
    hoverLightButton,
    colorful,
  },
  created() {
    for(let i in this.moreDemoList){
      this.moreDemoList[i].style={
        color:this.$.randomColor(),
        fontSize:this.$.random(24,12)+'px'
      }
    }
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
    }
  }
}
</script>

<style scoped>

</style>
