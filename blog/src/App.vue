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
  data () {
    return {
      isRouterAlive: true
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
