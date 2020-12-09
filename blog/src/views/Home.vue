<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-typed-js
        :strings="['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today', '今日事，今日毕']"
        :typeSpeed= '150'
        :backSpeed= '70'
        :startDelay= '100'
        :loop= 'true'>
      <h1 class="typing"></h1>
    </vue-typed-js>
    <el-container>
      <el-container>
        <el-aside width="200px">Aside</el-aside>

          <el-main>Main</el-main>

      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
