<template>
  <vuescroll>
    <div class="article">
      <contentBanner :imgSrc="bannerSrc" :title="title" />
      <div class="container">
        <div class="page">
          <div class="article-lists">
            <div class="article-title is-center">
              {{ title }}
              <br />
              <span class="article-meta">{{ time }}</span>
              <span class="article-meta"> <i class="iconfont icon-leibie"></i> <a v-for="(o,i) in categories" :key="i" :href="o.href">{{ o.categorie }}</a></span>
              <span class="article-meta">评论（{{ commentCount }}）</span>
            </div>
            <hr>
            <div>
              <div v-if="isUpdata" class="article-update-tips">本文于 {{ updataTime }} 更新，注意查看新内容</div>
              <div class="article-content" v-html="content"></div>
            </div>
            <div>
              <div class="post-actions">
                <a href="javascript:;" etap="like" class="post-like action action-like" data-pid="72858">
                  <i class="iconfont icon-zan" style="margin-right: .07rem"></i>赞(<span>35</span>)
                </a>
              </div>
              <div class="post-copyright">本站文章未说明转载即为原创，转载请注明，<a href="https://fuliba2021.net">Vixcity</a> » <a href="https://fuliba2021.net/99.html">{{ title }}</a></div>
              <div class="article-tags"><i class="iconfont icon-biaoqian" style="margin-right: 0.1rem;"></i><a href="https://fuliba2021.net/tag/%e8%b4%ad%e7%89%a9%e7%be%a4" rel="tag">购物群</a></div>
              <nav class="article-nav">
                <span class="article-nav-prev">上一篇<br><a href="https://fuliba2021.net/2021107.html" rel="prev">2021福利汇总第107期：Oh My Love</a></span>
                <span class="article-nav-next">下一篇<br><a href="https://fuliba2021.net/2021107.html" rel="next">2021福利汇总第107期：Oh My Love</a></span>
              </nav>
              <div class="relates relates-imagetext">
                <div class="relates-title">
                  <h3>相关推荐</h3>
                </div>
                <ul>
                  <li v-for="i in 8" :key="i">
                    <a target="_blank" href="https://fuliba2021.net/moebius.html">
                      <img data-src="https://tva1.sinaimg.cn/mw600/a6a976a2jw1ep1tbxpno1j21h90spqcp.jpg" alt="周末荐片：一部满足宅男意淫思想的神剧情电影《莫比乌斯》-福利吧" src="https://tva1.sinaimg.cn/mw600/a6a976a2jw1ep1tbxpno1j21h90spqcp.jpg" class="thumb" style="display: block;">
                    </a>
                    <a href="https://fuliba2021.net/moebius.html">
                      周末荐片：一部满足宅男意淫思想的神剧情电影《莫比乌斯》</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div class="relates-title" id="comments">
                <h3>评论 <b>1</b></h3>
              </div>
              <div id="respond" class="no_webshot">
                <form action="https://fuliba2021.net/wp-comments-post.php" method="post" id="commentform">
                  <div class="comt">
                    <div class="comt-title">
                      <img data-src="https://fuliba2021.net/wp-content/uploads/2018/07/006a0xdJgw1evv94zexszj302s02sglg.jpg" width="40" height="40" alt="" class="avatar avatar-50 wp-user-avatar wp-user-avatar-50 photo avatar-default" src="https://fuliba2021.net/wp-content/uploads/2018/07/006a0xdJgw1evv94zexszj302s02sglg.jpg" style="display: inline;">
                    </div>
                    <div class="comt-box">
                      <textarea placeholder="评论人工审核，请勿发表违规内容、无意义内容。评论时填写正确的邮箱，有人回复你会收到邮件提醒。" class="input-block-level comt-area" name="comment" id="comment" cols="100%" rows="3" tabindex="1" onkeydown="if(event.ctrlKey&amp;&amp;event.keyCode==13){document.getElementById('submit').click();return false};"></textarea>
                      <div class="comt-ctrl">
                        <button type="submit" name="submit" id="submit" tabindex="5">提交评论</button>
                      </div>
                    </div>

                    <div class="comt-comterinfo" id="comment-author-info">
                      <ul>
                        <li class="form-inline"><label class="hide" for="author">昵称</label><input class="ipt" type="text" name="author" id="author" value="" tabindex="2" placeholder="昵称"><span class="text-muted">昵称 (必填)</span></li>
                        <li class="form-inline"><label class="hide" for="email">邮箱</label><input class="ipt" type="text" name="email" id="email" value="" tabindex="3" placeholder="邮箱"><span class="text-muted">邮箱 (必填)</span></li>
                        <li class="form-inline"><label class="hide" for="url">网址</label><input class="ipt" type="text" name="url" id="url" value="" tabindex="4" placeholder="网址"><span class="text-muted">网址</span></li>
                      </ul>
                    </div>
                  </div>

                  <input type="hidden" id="ak_js" name="ak_js" value="1628778621975"></form>
              </div>
              <div id="postcomments">
                <ol class="commentlist">
                  <li v-for="i in 8" :key="'commentlist'+i" class="comment even thread-even depth-1" id="comment-231359"><span class="comt-f">#{{ i }}</span><div class="comt-avatar"><img data-src="https://fuliba2021.net/wp-content/uploads/2018/07/006a0xdJgw1evv94zexszj302s02sglg.jpg" width="40" height="40" alt="" class="avatar avatar-50 wp-user-avatar wp-user-avatar-50 photo avatar-default" src="https://fuliba2021.net/wp-content/uploads/2018/07/006a0xdJgw1evv94zexszj302s02sglg.jpg" style="display: block;"></div><div class="comt-main" id="div-comment-231359"><p>上周已看完，比第一部差太多了~~~</p>
                    <div class="comt-meta"><span class="comt-author">ken</span>1小时前</div></div><!-- .children -->
                  </li>
                </ol>
                <div class="pagenav">
                </div>
              </div>
            </div>
          </div>
        </div>
        <asideContent url='article'/>
      </div>
    </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner"
import asideContent from "../../components/asideContent/asideContent"
import vuescroll from 'vuescroll'

export default {
  name: "myArticle",
  components:{
    contentBanner,
    asideContent,
    vuescroll
  },
  mounted() {
    this.ready(),
    this.$('.__vuescroll').css('height','100vh')
  },
  data() {
    return{
      bannerSrc:'',
      title:'文章',
      time:'',
      isUpdata:'',
      commentCount:'',
      updataTime:'',
      categories:'',
      content:''
    }
  },
  methods: {
    ready() {
      console.log('%c台隍枕夷夏之交，\n宾主尽东南之美。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #3d6167;font-wight:700;font-size:35px");
      this.$api.getArticleTitle().then(r=>{
        this.title = r.data.title
        this.time = r.data.time
        this.commentCount = r.data.commentCount
        this.categories = r.data.categories
        this.updataTime = r.data.updataTime
        this.isUpdata = r.data.isUpdata
      })
      this.$api.getArticleContent().then(r=>{
        this.content = r.data.content
      })
      this.$api.getArticlesBannerSrc().then(r=>{
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat center center;padding-left:480px;padding-bottom: 400px;")
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