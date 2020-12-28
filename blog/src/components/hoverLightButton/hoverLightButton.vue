<template>
  <div>
    <a href="javascript:void(0)">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "hoverLightButton",
  props:['text']
}
</script>

<style scoped>
  a{
    text-align: center;
    display: block;
    margin: 0 auto;
    position: relative;
    line-height: 1rem;
    width: 4rem;
    height: 1rem;
    text-transform: uppercase;
    font-size: .25rem;
    color: #fff;
    border-radius: .5rem;
    background-image: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    background-size: 400%;
    z-index: 1;
  }
  a::before{
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: .5rem;
    background-image: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    background-size: 400%;
    z-index: -1;
    /*模糊设置*/
    filter: blur(20px);
  }
  a:hover,a:hover::before{
    animation: hoverLightButton 8s infinite;
  }
  @keyframes hoverLightButton {
    100%{
      background-position: -400%,0;
    }
  }
</style>