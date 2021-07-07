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
