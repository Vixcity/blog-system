<template>
  <div class="home">
    <div class="banner">
      <div class="site-info">
        <h1 class="site-title">
          <span>Vixcity</span>
        </h1>
        <div class="site-subtitle">
          <vue-typed-js
              :strings="['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today', '今日事，今日毕']"
              :typeSpeed= '150'
              :backSpeed= '70'
              :startDelay= '100'
              :backDelay= '1500'
              :loop= 'true'>
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>
      </div>
      <div class="bannerDown">
        <i class="iconfont icon-xiajiantou"></i>
      </div>
      <img src="../../assets/image/homePage/backgroundBanner.jpg" alt="">
    </div>
    <div class="container">
      <el-radio-group v-model="radio1" @change="colorChange">
        <el-radio-button label="默认"></el-radio-button>
        <el-radio-button label="暗黑之子"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      radio1: '默认'
    }
  },
  methods: {
    colorChange(color) {
      let changeColor = function (varName='--fontColor', color='#ffffff') {document.getElementsByTagName('body')[0].style.setProperty(varName, color)};
      if(color === '默认') {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#ffffff');
        changeColor()
      } else {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#2e2f34');
        changeColor()
      }
    }
  }
}
</script>

<style scoped>

</style>