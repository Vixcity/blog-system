<template>
  <div class="num-content cf-all100">
    <div class="behind-div"></div>
    <div class="face-div" :style="runStyle"></div>
    <p class="show-num"><v-countup :start-value="0" :end-value="sendNum">{{sendNum}}</v-countup></p>
  </div>
</template>

<script>
export default {
  name: 'NumProgress',
  props: {
    sendNum: {
      type: Number,
      default: 1
    },
    maxNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // 控制动画对象
      runStyle: {}
    };
  },
  mounted() {
    this.$watch('sendNum', () => {
      if (this.maxNum) {
        setTimeout(() => {
          // 防止意外计算错误动画超出
          this.runStyle = { width: `${(this.sendNum / this.maxNum * 50) > 50 ? 50 : this.sendNum / this.maxNum * 50}px` };
        }, 1000);
      }
    }, { immediate: true });
  }
};
</script>

<style scoped lang="scss">
.num-content{
  position: relative;
  left: 45%;
  >div{
    position: absolute;
    left: 5px;
    top: 0;
    bottom: 0;
    width: 50px;
    height: 8px;
    margin: auto;
    border-radius: 4px;
  }
  .behind-div{
    background:rgba(228,231,237,1);
  }
  .face-div{
    width: 0;
    transition: 1s;
    background-color: #D64541;
  }
  .show-num{
    position: absolute;
    left: 65px;
    top: 0;
    bottom: 0;
    height: 18px;
    margin: auto;
    font-size: 13px;
    font-weight: bold;
    color: rgba(214,69,65,1);
  }
}
</style>
