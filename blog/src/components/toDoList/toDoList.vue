<template>
  <div class="todolist">
    <label class="todo-list__label" v-for="(item,index) in list" :key="'toDoList_'+index">
      <input type="checkbox" name="" id="" />
      <i class="check"></i>
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'ToDoList',
  props: {
    list: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.todolist{
  background: #1A1E23;
  padding: .01rem .2rem;
}
.todo-list__label {
  display: flex;
  align-items: center;
  margin: 40px 0;
  font-size: 18px;
  font-family: Lato, sans-serif;
  color: #f1faee;
  cursor: pointer;

  input[type="checkbox"] {
    opacity: 0;
    appearance: none;

    & + .check {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid #f1faee;
      transition: 0.2s;
    }

    &:checked + .check {
      width: 25px;
      height: 15px;
      border-top: transparent;
      border-right: transparent;
      transform: rotate(-45deg);
    }

    & ~ span {
      position: relative;
      left: 40px;
      white-space: nowrap;
      transition: 0.5s;

      &::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #f1faee;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }
    }

    &:checked ~ span {
      color: #585b57;

      &::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}
</style>