<template>
  <div style="height:auto;" v-show="isShowAside" class="aside_content">
    <div v-if="myInfo.showMyInfo" class="card-widget card-info">
      <div class="card-content">
        <div class="card-info-avatar is-center">
          <img :src="myInfo.avatarImgSrc" class="" alt="">
          <div class="author-info_name">{{myInfo.name}}</div>
          <div class="author-info_description">{{myInfo.description}}</div>
        </div>
        <div class="card-info-data">
          <div v-for="(item,index) in myInfo.count" :key="index" class="card-info-data-item is-center">
            <a :href="item.href" data-pjax-state="">
              <div class="headline">{{item.handLine}}</div>
              <div class="length-num">{{item.count}}</div>
            </a>
          </div>
        </div>
        <a :href="myInfo.giteeHref" v-if="myInfo.showGitee" id="card-info-btn" target="_blank" class="animated bounceInLeft button--animated">
          <i class="iconfont icon-gitee"></i>
          <span>我的Gitee</span>
        </a>
        <div class="card-info-social-icons is-center">
          <a href="tencent://AddContact/?fromId=30&fromSubId=1&subcmd=all&uin=2091283625" title="我的QQ" class="social-icon">
            <i class="iconfont icon-qq"></i>
          </a>
          <a href="tencent://AddContact/?fromId=30&fromSubId=1&subcmd=all&uin=2091283625" title="我的邮箱" class="social-icon">
            <i class="iconfont icon-youxiang"></i>
          </a>
          <a href="tencent://AddContact/?fromId=30&fromSubId=1&subcmd=all&uin=2091283625" title="关于我" class="social-icon">
            <i class="iconfont icon-guanyuwomen"></i>
          </a>
        </div>
      </div>
    </div>
    <div v-if="announcement.isShowAnnouncement" class="card-widget card-announcement">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-gonggao gonggao"></i>
          <span>公告</span>
        </div>
        <div class="announcement_content">
          {{ announcement.content }}
        </div>
      </div>
    </div>
    <div v-if="docList.isShowDoc" class="card-widget card-categories card-docs">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-wendang"></i>
          <span>文档</span>
        </div>
        <ul class="card-category-list">
          <li v-for="(item,index) in docList.docs" :key="index" class="card-category-list-item">
            <a :href="item.href" class="card-category-list-link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="articleList.isShowarticle" class="card-widget card-categories card-docs">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-lishi"></i>
          <span>最新文章</span>
        </div>
        <div class="aside-list">
          <div v-for="(item,index) in articleList.articles" :key="index" class="aside-list-item">
            <a :href="item.href" class="thumbnail"><img :src="item.imgSrc" alt=""></a>
            <div class="content">
              <a :href="item.href" :title="item.title" class="title">{{item.title}}</a>
              <time>{{item.createTime}}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="comments.isShowComment" class="card-widget">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-shandian"></i>
          <span>最新评论</span>
        </div>
        <div class="aside-list">
          <div v-for="(item,index) in comments.commentsList" :key="index" class="aside-list-item">
            <a href="/messageboard/" class="thumbnail"><img :src="item.gravatarSrc" alt=""></a>
            <div class="content">
              <a href="/messageboard/" :title="item.comment" class="title">{{item.comment}}</a>
              <div class="name">
                <span>{{item.userName}}</span>
                <time style="margin-left:.04rem">/ {{item.reTime}}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="categoryList.isShowCategory" class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-folder"></i>
          <span>分类</span>
        </div>
         <ul class="card-category-list">
          <li v-for="(item,index) in categoryList.categorys" :key="index" class="card-category-list-item">
            <a :href="item.href" class="card-category-list-link">
              <span class="card-category-list-name">{{item.categoryName}}</span>
              <span class="card-category-list-count">{{item.categoryCount}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="tagsList.isShowTag" class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-biaoqian"></i>
          <span>标签</span>
        </div>
        <div class="card-tag-cloud">
          <a v-for="(item,index) in tagsList.tags" :key="index" :href="item.href" :style="item.style">{{item.tag}}</a>
        </div>
      </div>
    </div>
    <div v-if="archiveList.isShowArchiveList" class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-guidang"></i>
          <span>归档</span>
        </div>
         <ul class="card-category-list">
          <li v-for="(item,index) in archiveList.archives" :key="index" class="card-category-list-item">
            <a :href="item.href" class="card-category-list-link">
              <span class="card-category-list-name">{{item.archiveData}}</span>
              <span class="card-category-list-count">{{item.archiveCount}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="webInfo.isShowWebInfo" class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-charts"></i>
          <span>网站资讯</span>
        </div>
         <div class="webinfo">
           <div v-for="(item,index) in webInfo.webInfoList" :key="index" class="webinfo-item">
             <div class="item-name">{{item.name}}</div>
             <div class="item-count">{{item.count}}</div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus'

export default {
  name: "asideContent",
  created() {
    this.getMyInfo()
  },
  mounted() {
    bus.$on('changeAside', isShowAside =>{
      this.isShowAside = isShowAside
    })
  },
  data(){
    return{
      isShowAside:true,
      myInfo: {},
      announcement:{},
      docList: {},
      articleList:{},
      comments:{},
      categoryList:{},
      tagsList:{},
      archiveList:{},
      webInfo:{}
    }
  },
  methods: {
    getMyInfo(){
      this.$api.getACMyInfo().then(r=>{
        this.myInfo = r.data
      })
      this.$api.announcement().then(r=>{
        this.announcement = r.data
      })
      this.$api.getACDocList().then(r=>{
        this.docList = r.data
      })
      this.$api.getACArticleList().then(r=>{
        this.articleList = r.data
      })
      this.$api.getACComments().then(r=>{
        this.comments = r.data
      })
      this.$api.getACCategoryList().then(r=>{
        this.categoryList = r.data
      })
      this.$api.getACTagsList().then(r=>{
        this.tagsList = r.data
        for(let i in this.tagsList.tags){
          this.tagsList.tags[i].style={
            color:this.$.randomColor(),
            fontSize:this.$.random(20,12)+'px'
          }
        }
      })
      this.$api.getACArchiveList().then(r=>{
        this.archiveList = r.data
      })
      this.$api.getACWebInfo().then(r=>{
        this.webInfo = r.data
      })
    }
  }
}
</script>

<style scoped>

</style>
