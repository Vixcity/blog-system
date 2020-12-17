<template>
  <div class="siderBar" @click="siderBarClick">
    <div style="height:90vh;">
      <div class="navbar" style="width:100%">
        <div class="logo">
          <a href="/" >
            <i class="iconfont icon-v-" style="font-size:.4rem;color:white;"></i>
          </a>
        </div>
        <ul class="nav nav-main">
          <li v-for="item in menuTree" :key="item" class="nav-item">
            <a :href="item.href" class="nav-item-link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="changeLOD">
      <i v-if="isLight" class="iconfont icon-yueliang icon_button" @click="changeLOD"></i>
      <i v-else class="iconfont icon-taiyang icon_button" @click="changeLOD"></i>
      <i class="iconfont icon-huidaodingbu icon_button" @click="toTop"></i>
      <i v-if="isShowAside" class="iconfont icon-tubiaozhengli-34" @click="changeBOS"></i>
      <i v-else class="iconfont icon-tubiaozhengli-33" @click="changeBOS"></i>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus'

export default {
  name: "siderBar",
  data() {
    return {
      isShowAside:true,
      showSearch:false,
      isLight:true,
      menuTree:[
        {
          title:'首页',
          href:'/'
        },
        {
          title:'归档',
          href:'/archives'
        },
        {
          title:'分类',
          href:'/categories'
        },
        {
          title:'标签',
          href:'/tags'
        },
        {
          title:'文档',
          href:'/docs'
        },
        {
          title:'娱乐',
          href:'/amusement'
        },
        {
          title:'友链',
          href:'/friendLink'
        },
        {
          title:'留言板',
          href:'/messageBoard'
        },
        {
          title:'关于我',
          href:'/aboutMe'
        },
        {
          title:'自言自语',
          href:'/talkToMyself'
        },
        {
          title:'更多示例',
          href:'/moreDemo'
        }
      ]
    }
  },
  created() {
    this.isLight = localStorage.getItem('isLight') === 'true' || localStorage.getItem('isLight') ==='undefined' || localStorage.getItem('isLight') ===null;
    localStorage.setItem('isLight', this.isLight)
    this.getModel(this.isLight)
  },
  methods: {
    siderBarClick(e) {
      e.stopPropagation()
    },
    changeBOS(){
      this.isShowAside=!this.isShowAside
      localStorage.setItem('isShowAside', this.isShowAside)
      bus.$emit('changeAside',this.isShowAside)
    },
    changeLOD() {
      this.isLight=!this.isLight
      this.getModel(this.isLight)
      localStorage.setItem('isLight', this.isLight)
    },
    getModel(isLight){
      let changeColor = function (varName='--fontColor', color='#ffffff') {document.getElementsByTagName('body')[0].style.setProperty(varName, color)};
      if(isLight=='true' || isLight==true) {
        changeColor('--defaultColor', '#ffffff')
        changeColor('--fontColor', '#2e2f34')
        changeColor('--noticeFontColor','#969696')
        changeColor('--blockquoteColor','#5c6b72')
        changeColor('--hrefColor','#0681d0')
        changeColor('--card-bg','#fff')
        changeColor('--avatarImgFilter',1)
        changeColor('--btnColor','#fcd985')
        changeColor('--btnHoverColor','#ff7242')
        changeColor('--cardDocColor','#49b1f5')
        changeColor('--hrefHoverColor','#47e0fc')
      } else {
        changeColor('--noticeFontColor','#efefef')
        changeColor('--defaultColor','#2e2f34')
        changeColor('--blockquoteColor','#f2f2f2')
        changeColor('--hrefColor','#f2f2f2')
        changeColor('--card-bg','#121212')
        changeColor('--avatarImgFilter',.8)
        changeColor('--btnColor','#1f1f1f')
        changeColor('--btnHoverColor','#787878')
        changeColor('--cardDocColor','#383838')
        changeColor('--hrefHoverColor','#cdcdcd')
        changeColor()
      }
    },
    toTop(){
      document.getElementsByTagName('body')[0].scrollIntoView({behavior:'smooth'});
    }
  },
}
</script>

<style scoped>

</style>