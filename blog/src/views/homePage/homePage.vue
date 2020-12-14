<template>
  <div class="home">
    <div class="banner">
      <div class="site-info">
        <h1 class="site-title">
          <span>{{contentInfo.title}}</span>
        </h1>
        <div class="site-subtitle">
          <vue-typed-js
              :strings="contentInfo.typed"
              :typeSpeed= '150'
              :backSpeed= '70'
              :startDelay= '100'
              :backDelay= '1500'
              :loop= 'true'>
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>
      </div>
      <div class="bannerDown">
        <i class="iconfont icon-xiajiantou"></i>
      </div>
      <img src="../../assets/image/homePage/backgroundBanner.jpg" alt="">
    </div>
    <div class="container">
     <div class="outer">
       <div class="notice" style="margin-top:.5rem">
        <i class="iconfont icon-xinaixin-fubenbeifen"></i>
        <div class="notice-content">
          {{contentInfo.noticeContent}}
        </div>
      </div>
      <article>
        <article v-for="item in contentInfo.articleTypePost" :key="item" class="article">
          <div class="article-inner">
            <heaeder class="article-header">
              <h2>
                <a class="article-title" :href="item.href">{{item.title}}<i class="article-topping" v-if="item.isTopping">置顶</i></a>
              </h2>
            </heaeder>
            <div class="article-meta">
              <a :href="item.href" class="article-date">
                <i class="iconfont icon-riqiqishu"></i>
                <time>{{item.createData}}</time>
              </a>
              <div class="article-category">
                <i class="iconfont icon-leibie"></i>
                <span v-for="(o,i) in item.tags" :key="o">
                  <a :href="o.href" class="article-category-link">{{o.tag}}</a>
                  <span v-if="item.tags.length!=1 && i!=item.tags.length-1"> / </span>
                </span>
              </div>
            </div>
            <div class="article-entry">
              <div v-html="item.content">
              </div>
              <a class="article-more-link" :href="item.href">阅读更多...</a>
            </div>
            <footer class="article-footer">
              <ul class="article-tag-list">
                <i class="iconfont icon-biaoqian" style="margin-right:.1rem;"></i>
                <li class="article-tag-list-item" v-for="o in item.tags" :key="o">
                  <a :href="o.href" class="article-tag-list-link">{{o.tag}}</a>
                </li>
              </ul>
            </footer>
          </div>
        </article>
      </article>
     </div>
     <AsideContent></AsideContent>
    </div>
  </div>
</template>

<script>
import AsideContent from "../../components/asideContent/asideContent"

export default {
  name: "homePage",
  components: {
    AsideContent
  },
  data() {
    return {
      contentInfo:{
        title: 'Vixcity',
        typed: ['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today', '今日事，今日毕'],
        noticeContent: '最是人间留不住，朱颜辞镜花辞树',
        articleTypePost:[
          {
            title: '中文说明',
            href: 'www.baidu.com',
            createData: '2020-01-02',
            isTopping: true,
            content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
            tags: [
              {tag:'技术',href:'www.baidu.com'}
            ]
          },{
            title: '中文说明',
            href: 'www.163.com',
            createData: '2020-01-02',
            isTopping: false,
            content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
            tags: [
              {tag:'旅行',href:'www.baidu.com'},
              {tag:'国内',href:'www.vixcity.com'},
            ]
          }
        ]
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>