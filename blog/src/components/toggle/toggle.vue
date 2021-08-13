<template>
  <div class="form-check">
    <label class="form-switch-material">
      <input v-model="value" type="checkbox" />
      <div class="line"></div>
      <div class="small-ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'showValue',
    event: 'valueChange'
  },
  props: {
    showValue: {
      type: Boolean,
      defaule: false
    }
  },
  watch: {
    value: {
      handler() {
        this.$emit('valueChange', this.value);
      },
      immediate: true
    },
    showValue: {
      handler() {
        if(this.value !== this.showValue) {
          this.value = this.showValue;
        }
      },
      immediate: true
    }
  },
  data() {
    return{
      value: this.showValue
    }
  },
  methods: {
    ceshi() {
      console.log(123);
    }
  }
}
</script>

<style lang="scss" scoped>
.form-check{
  display: flex;
  align-items: center;
}
.form-switch-material {
  $switch-color: blue;
  $ball-color: rgb(205, 210, 218);
  $ball-active-color: rgb(78, 192, 2);
  $line-color: rgb(205, 210, 218);

  position: relative;
  width: 60px;
  height: 32px;
  margin:0 auto;
  background: var($switch-color);
  border-radius: 16px;
  box-shadow: 0 1px 3px hsla(231, 100%, 12%, 0.3);
  cursor: pointer;

  input[type="checkbox"] {
    opacity: 0;
    visibility: hidden;
    appearance: none;
    & ~ .line {
      &::before,
      &::after {
        position: absolute;
        content: "";
        top: 14px;
        width: 24px;
        height: 4px;
        background: $line-color;
        transition: 0.3s;
      }

      &::before {
        left: 4px;
        border-radius: 2px 0 0 2px;
        transform: scaleX(0);
        transform-origin: left;
      }

      &::after {
        left: 32px;
        border-radius: 0 2px 2px 0;
        transform-origin: right;
      }
    }

    & ~ .small-ball {
      position: absolute;
      content: "";
      top: 4px;
      left: 4px;
      width: 24px;
      height: 24px;
      background: #fff;
      border-radius: 50%;
      box-shadow: inset 0 0 0 4px $line-color;
      transition: 0.3s;
    }

    &:checked {
      & ~ .line {
        &::before {
          transform: scaleX(1);
        }

        &::after {
          transform: scaleX(0);
        }
      }

      & ~ .small-ball {
        box-shadow: inset 0 0 0 12px $ball-active-color;
        transform: translateX(28px);
      }
    }
  }
}
</style>