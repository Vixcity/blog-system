<template>
  <div class="categories">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="category-lists">
          <div class="category-title is-center">
            分类 -
            <span class="category-amount">{{ categories.length }}</span>
          </div>
          <div>
            <ul class="category-list">
              <li v-for="item in categories" :key="item" class="category-list-item">
                <a :href="item.href" class="category-list-link">{{ item.title }}</a>
                <span class="category-list-count">({{ item.count }})</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <asideContent />
    </div>
  </div>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"

export default {
  name: "categories",
  components:{
    contentBanner,
    asideContent
  },
  data() {
    return{
      bannerSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/Photo/categories.jpg',
      title:'分类',
      categories:[
        {
          href:'www.baidu.com',
          title:'Demo',
          count:5
        },
        {
          href:'www.baidu.com',
          title:'Docs文檔',
          count:3
        },
        {
          href:'www.baidu.com',
          title:'Markdown',
          count:55
        },
        {
          href:'www.baidu.com',
          title:'Thx',
          count:51
        },
        {
          href:'www.baidu.com',
          title:'進階教程',
          count:50
        },
        {
          href:'www.baidu.com',
          title:'测试',
          count:6
        },
        {
          href:'www.baidu.com',
          title:'css',
          count:8
        },
        {
          href:'www.baidu.com',
          title:'JavaScript',
          count:9
        },
        {
          href:'www.baidu.com',
          title:'Html',
          count:45
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>