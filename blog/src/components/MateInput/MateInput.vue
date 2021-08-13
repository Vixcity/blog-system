<template>
  <div class="f-oh">
    <div class="mate-box" :class="{'mate-box-error': !inputObject.check}">
      <input ref="input" class="mate-input" :type="type" placeholder=" " v-model="inputObject.value"/>
      <label @click="$refs.input.focus()">{{ label }}</label>
      <span class="error-message f-otw" v-show="!inputObject.check">{{ inputObject.errorMsg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: '12312'
    }
  },
  data() {
    return{
      inputObject: {
        check: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mate-box{
  position: relative;
  margin: 1rem;
  border-bottom: 2px solid #f2f2f2;
  &:before{
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: .3s;
    background-color: #1890ff;
  }
  &:focus-within:before{
    transform: scaleX(1);
  }
  &:after{
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: .3s;
    background-color: #fd5d5d;
  }
  .mate-input{
    width: 100%;
    padding: 8px 0;
    font-size: inherit;
    font-weight: inherit;
    background: transparent;
    border: none;
    outline: none;
    &:focus~label, &:not(:placeholder-shown)~label {
      transform: translateY(-120%) scale(.75);
    }
  }
  label{
    position: absolute;
    top: 8px;
    left: 0;
    transition: .3s;
    transform-origin: left;
  }
  .error-message{
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    font-size: 12px;
    color: #fd5d5d;
  }
}
.mate-box-error{
  &:after{
    transform: scaleX(1);
  }
}
</style>
