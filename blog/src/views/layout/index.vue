<template>
  <vuescroll>
    <div class="main">
      <headerTop />
      <div class="flex">
        <siderBar />
        <router-view />
      </div>
      <div class="changeLODIndex">
        <i v-if="isLight" class="iconfont icon-yueliang icon_button" @click="changeLOD"></i>
        <i v-else class="iconfont icon-taiyang icon_button" @click="changeLOD"></i>
        <i class="iconfont icon-huidaodingbu icon_button" @click="toTop"></i>
        <i v-if="isShowAside" class="iconfont icon-tubiaozhengli-34" @click="changeBOS"></i>
        <i v-else class="iconfont icon-tubiaozhengli-33" @click="changeBOS"></i>
      </div>
    </div>
  </vuescroll>
</template>

<script>
import vuescroll from 'vuescroll'
import siderBar from '@/views/layout/siderBar'
import headerTop from '@/views/layout/headerTop'
import bus from '@/assets/js/eventBus'

export default {
  name: 'mainWindow',
  components: {
    vuescroll,
    siderBar,
    headerTop
  },
  data() {
    return {
      isLight:true,
      isShowAside:true
    }
  },
  created() {
    this.isLight = localStorage.getItem('isLight') === 'true';
    this.getModel(this.isLight)
  },
  mounted() {
    this.$('.__vuescroll').css('height','100vh')
  },
  methods: {
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
        changeColor()
      }
    },
    toTop(){
      document.getElementsByTagName('body')[0].scrollIntoView({behavior:'smooth'});
    }
  },
}
</script>

<style>
  @font-face {
		font-family :'TitilliumWeb';
		src: url('../../assets/font/TitilliumWeb-Regular.ttf');
	}

  @font-face {
    font-family: 'yyxs';
    src: url('../../assets/font/缘缘体行书.ttf');
	}

  @font-face {
    font-family: 'ysxxk';
    src: url('../../assets/font/演示夏行楷.ttf');
	}

@font-face {
    font-family: 'neon';
    src: url('../../assets/font/neon.ttf');
	}
</style>