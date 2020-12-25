<template>
  <div class="lightButton">
    <a href="javascript:void(0);" :style="color">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "lightButton",
  props:['text','color'],
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.lightButton{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a{
    position: relative;
    display: block;
    width: 1.4rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    margin: .4rem;
    color: aqua;
    font-size: .2rem;
    transition:all .3s ease-in-out;
    // 颜色滤镜，想当与于色轮
    filter:hue-rotate(calc(var(--i) * 60deg));
  }
  a::after,a::before{
    content: '';
    position: absolute;
    display: block;
    width: .2rem;
    height: .2rem;
    border: 2px solid aqua;
    transition:all .3s ease-in-out .3s;
  }
  a::before{
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
  }
  a::after{
    bottom: 0;
    right: 0;
    border-left: 0;
    border-top: 0;
  }
  a:hover{
    background: aqua;
    color: #fff;
    box-shadow: 0 0 50px aqua;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0,0,0,0.3));
    transition-delay: .4s;
  }
  a:hover::before,a:hover::after{
    width: 1.38rem;
    height: .58rem;
    transition-delay: 0s;
  }
}
</style>