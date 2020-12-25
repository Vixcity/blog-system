<template>
  <div class="tags">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="category-lists">
          <div class="tag-cloud-title is-center">
            {{ title }} -
            <span class="tag-cloud-amount">{{ tags.length }}</span>
          </div>
          <div class="tag-cloud-list is-center">
            <a v-for="(item,index) in tags" :key="index" :href="item.href" :style="item.style">{{item.tagName}}</a>
          </div>
        </div>
      </div>
      <asideContent />
    </div>
  </div>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner";
import asideContent from "../../components/asideContent/asideContent";
import { randomColor,random } from '../../utils/common'

export default {
  name: "tags",
  components:{
    contentBanner,
    asideContent
  },
  created() {
    for(let i in this.tags){
      this.tags[i].style={
        color:this.randomColor(),
        fontSize:this.random(24,12)+'px'
      }
    }
  },
  data() {
    return{
      randomColor:randomColor,
      random:random,
      title:'标签',
      bannerSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/Photo/tags.jpg',
      tags:[
        {
          href:"www.baidu.com",
          tagName:'文档aa'
        },{
          href:"www.baidu.com",
          tagName:'文kabrhbva'
        },{
          href:"www.baidu.com",
          tagName:'fgsdfvgbva'
        },{
          href:"www.baidu.com",
          tagName:'rhbva'
        },{
          href:"www.baidu.com",
          tagName:'文brhbva'
        },{
          href:"www.baidu.com",
          tagName:'brhbva'
        },{
          href:"www.baidu.com",
          tagName:'文档ava'
        },{
          href:"www.baidu.com",
          tagName:'文档asdfavbjkabva'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>