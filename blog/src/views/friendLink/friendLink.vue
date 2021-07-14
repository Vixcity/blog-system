<template>
  <div class="friendLink">
    <contentBanner :imgSrc="bannerSrc" :title="title" />
    <div class="container">
      <div class="page">
        <div class="linkList-lists">
          <div class="linkList-title is-center">
            {{ title }} -
            <span class="linkList-amount">{{ friendLinkList.length }}</span>
          </div>
          <div>
            <hr>
            <div class="friendLinkGetInfo">
              <h1>链接申请说明</h1>
              <p class="needLink">
                <span><i class="iconfont icon-gou"></i>原创优先</span>
                <span><i class="iconfont icon-gou"></i>技术优先</span>
                <span><i class="iconfont icon-cha1"></i>经常宕机</span>
                <span><i class="iconfont icon-cha1"></i>不合法规</span>
                <span><i class="iconfont icon-cha1"></i>插边球站</span>
                <span><i class="iconfont icon-cha1"></i>红标报毒</span>
              </p>
              <p>
                如需交换友链，可以在留言区留言
                <br />
                名称：ZQ个人博客
                <br />
                网址：http://lzqcode.com/
                <br />
                图标：image/admin_img.png
                <br />
                描述：只要朝着一个方向努力，一切都会变得得心应手
              </p>
              <p>
                申请提交后若无其它原因将在24小时内审核,如超过时间还未通过,请私信我.(各种额外因素)
              </p>
            </div>
            <hr class="fengexian">
            <ul class="link-list">
              <li v-for="(item,index) in friendLinkList" :key="index" class="link-list-item">
                <a :href="item.href" class="link-list-link">
                  <img :src="item.imgSrc" alt="">
                  {{ item.name }}
                  <br />
                  <span>{{ item.autograph }}</span>
                </a>
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
  name: "friendLink",
  components:{
    contentBanner,
    asideContent
  },
  mounted() {
    console.log('%c虚空落泉千仞直，\n雷奔入江不暂息。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: ##3d6167;font-wight:700;font-size:35px");
    this.ready()
  },
  data() {
    return{
      bannerSrc:'',
      title:'友链',
      friendLinkList:[]
    }
  },
  methods: {
    ready() {
      this.$api.getFriendLinkTitle().then(r=>{
        this.title = r.data.title
      })
      this.$api.getFriendLinkList().then(r=>{
        this.friendLinkList = r.data
      })
      this.$api.getFriendLinkBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat 42% center;padding-left:480px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
      })
    },
  },
}
</script>

<style scoped>

</style>