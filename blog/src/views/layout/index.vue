<template>
  <div class="home">
    <headerTop />
    <div class="flex">
      <siderBar />
      <div>
        <div class="banner">
          <vue-typed-js
            :strings="['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today', '今日事，今日毕']"
            :typeSpeed= '150'
            :backSpeed= '70'
            :startDelay= '100'
            :backDelay= '1500'
            :loop= 'true'>
            <h1 class="typing"></h1>
          </vue-typed-js>
          <img src="../../assets/image/homePage/backgroundBanner.jpg" alt="">
        </div>
        <router-view/>
        <div class="container">
          <el-radio-group v-model="radio1" @change="colorChange">
          <el-radio-button label="默认"></el-radio-button>
          <el-radio-button label="绿荫草场"></el-radio-button>
          <el-radio-button label="荣耀典藏"></el-radio-button>
          <el-radio-button label="暗黑之子"></el-radio-button>
        </el-radio-group> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import siderBar from '@/views/layout/siderBar'
import headerTop from '@/views/layout/headerTop'

export default {
  name: 'Home',
  components: {
    siderBar,
    headerTop
  },
  data() {
    return {
      radio1: '默认'
    }
  },
  methods: {
    colorChange(color) {
      let changeColor = function (varName='--fontColor', color='#ffffff') {document.getElementsByTagName('body')[0].style.setProperty(varName, color)};
      if(color === '默认') {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#1890ff');
        changeColor()
      } else if(color === '绿荫草场') {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#009688');
        changeColor('--fontColor', '#000000')
      } else if(color === '荣耀典藏') {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#f6ca9d');
        changeColor('--fontColor', '#000000')
      } else {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#2e2f34');
        changeColor()
      }
      
    }
  }
}
</script>
