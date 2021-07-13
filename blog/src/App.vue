<template>
  <div id="app" @click="documentClick">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  created() {
    // 加载动画显示
    this.$loading.show(
        {
          text:'正在加载中...',
          type:1
        }
    )
    this.$nextTick(()=>{
        this.$loading.hide()
    })
  },
  mounted () {
    window.vue = this
    window.$ = this.$
    let explorer = navigator.userAgent;
    //ie 
    if (explorer.indexOf("MSIE") >= 0) {
      alert('本页面暂不支持IEi浏览器，请下载谷歌或者火狐浏览器')
    }
    //firefox 
    else if (explorer.indexOf("Firefox") >= 0) {
      console.log('%c恭喜你发现彩蛋', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #50D5B7), color-stop(1, #067D68) );color:transparent;background-clip: text;font-size:3em;');
      console.log('%c用谷歌看有不一样的发现哦','font-size:20px')
      localStorage.browser = 'Firefox'
    }
    //Chrome
    else if(explorer.indexOf("Chrome") >= 0){
      console.log('%c恭喜你发现彩蛋', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #50D5B7), color-stop(1, #067D68) );color:white;font-size:3em;');
      console.log('%c用火狐看有不一样的发现哦','font-size:20px')
      localStorage.browser = 'Chrome'
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0){
      alert('本页面暂不支持Safari浏览器，请下载谷歌或者火狐浏览器')
    }
  },
  data () {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    documentClick() {
      let w=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth
      if(w>768){
        return
      }
      document.getElementsByClassName("header")[0].className = 'header fixed';
      document.getElementsByClassName("siderBar")[0].className = 'siderBar';
      if(document.getElementsByClassName('moreOpen')[0]){
        document.getElementsByClassName('moreOpen')[0].className = 'iconfont icon-gengduo moreClose'
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/style/index.scss";
</style>
