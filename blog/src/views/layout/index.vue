<template>
  <div class="main">
    <headerTop />
    <div class="flex">
      <siderBar />
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import siderBar from '@/views/layout/siderBar'
import headerTop from '@/views/layout/headerTop'

export default {
  name: 'main',
  components: {
    siderBar,
    headerTop
  }
}
</script>

<style>
  @font-face {
		font-family :'TitilliumWeb';
		src: url('../../assets/font/TitilliumWeb-Regular.ttf');
	}
</style>