<template>
  <div style="height:auto;" class="aside_content">
    <div class="card-widget card-info">
      <div class="card-content">
        <div class="card-info-avatar is-center">
          <img :src="myInfo.avatarImgSrc" class="" alt="">
          <div class="author-info_name">{{myInfo.name}}</div>
          <div class="author-info_description">{{myInfo.description}}</div>
        </div>
        <div class="card-info-data">
          <div v-for="item in myInfo.count" :key="item" class="card-info-data-item is-center">
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
    <div class="card-widget card-announcement">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-gonggao gonggao"></i>
          <span>公告</span>
        </div>
        <div class="announcement_content">
          balabalabalabalabalabalbalablablabalbalbalbalbalblabaaaaalslkjdefbkaljrlkrbsbdvlasbdfbvgsekrtbvrjnvilrbtvglskrbhgklsrdbhgvfkrbhgkusgbvu
        </div>
      </div>
    </div>
    <div class="card-widget card-categories card-docs">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-wendang"></i>
          <span>文档</span>
        </div>
        <ul class="card-category-list">
          <li v-for="item in myInfo.docList" :key="item" class="card-category-list-item">
            <a :href="item.href" class="card-category-list-link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-widget card-categories card-docs">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-lishi"></i>
          <span>最新文章</span>
        </div>
        <div class="aside-list">
          <div v-for="item in articleList" :key="item" class="aside-list-item">
            <a :href="item.href" class="thumbnail"><img :src="item.imgSrc" alt=""></a>
            <div class="content">
              <a :href="item.href" :title="item.title" class="title">{{item.title}}</a>
              <time>{{item.createTime}}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-widget">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-shandian"></i>
          <span>最新评论</span>
        </div>
        <div class="aside-list">
          <div v-for="item in comments" :key="item" class="aside-list-item">
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
    <div class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-folder"></i>
          <span>分类</span>
        </div>
         <ul class="card-category-list">
          <li v-for="item in categoryList" :key="item" class="card-category-list-item">
            <a :href="item.href" class="card-category-list-link">
              <span class="card-category-list-name">{{item.categoryName}}</span>
              <span class="card-category-list-count">{{item.categoryCount}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-widget card-categories">
      <div class="card-content">
        <div class="item-headline">
          <i class="iconfont icon-biaoqian"></i>
          <span>标签</span>
        </div>
        <div class="card-tag-cloud">
          <a v-for="item in tagsList" :key="item" :href="item.href" :style="item.style">{{item.tag}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideContent",
  data(){
    return{
      myInfo: {
        avatarImgSrc: 'https://butterfly.js.org/image/avatar.png',
        name: 'Vixcity',
        description: 'A Simple and Card UI Design theme for Hexo',
        count:[
          {
            href: 'www.baidu.com',
            handLine: '文章',
            count: 11
          },
          {
            href: 'www.baidu.com',
            handLine: '标签',
            count: 6
          },
          {
            href: 'www.baidu.com',
            handLine: '分类',
            count: 3
          }
        ],
        giteeHref: 'https://gitee.com/vixcity',
        showGitee: false,
        docList: [
          {
            title:'🚀 快速开始',
            href:'www.vip.com'
          },
          {
            title:'📑 主题页面',
            href:'www.vip.com'
          },
          {
            title:'🛠 主题配置-1',
            href:'www.vip.com'
          },
          {
            title:'⚔️ 主题配置-2',
            href:'www.vip.com'
          },
          {
            title:'❓ 主题问答',
            href:'www.vip.com'
          },
          {
            title:'⚡️ 进阶教程',
            href:'www.vip.com'
          },
          {
            title:'✨ 更新日誌',
            href:'www.vip.com'
          },
        ]
      },
      articleList:[
        {
          title:'Butterfly添加全局吸底Aplayer教程',
          imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
          createTime:'2020-10-28',
          href:'www.baidu.com'
        },
        {
          title:'Butterfly添加全局吸底Aplayer教程',
          imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
          createTime:'2020-10-28',
          href:'www.baidu.com'
        },
        {
          title:'Butterfly添加全局吸底Aplayer教程',
          imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
          createTime:'2020-10-28',
          href:'www.baidu.com'
        },
        {
          title:'Butterfly添加全局吸底Aplayer教程',
          imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
          createTime:'2020-10-28',
          href:'www.baidu.com'
        },
        {
          title:'Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程',
          imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
          createTime:'2020-10-28',
          href:'www.baidu.com'
        }
      ],
      comments:[
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻',
          reTime:'22小时前'
        },
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
          reTime:'22小时前'
        },
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻',
          reTime:'22小时前'
        },
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
          reTime:'22小时前'
        },
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻',
          reTime:'22小时前'
        },
        {
          gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          userName:'火星飞鸟',
          comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
          reTime:'22小时前'
        },
      ],
      categoryList:[
        {
          href:'www.baidu.com',
          categoryName:'Demo',
          categoryCount:5
        },
        {
          href:'www.baidu.com',
          categoryName:'Doc文档',
          categoryCount:7
        },
        {
          href:'www.baidu.com',
          categoryName:'Markdown',
          categoryCount:1
        },
        {
          href:'www.baidu.com',
          categoryName:'Thx',
          categoryCount:1
        },
        {
          href:'www.baidu.com',
          categoryName:'进阶教程',
          categoryCount:2
        }
      ],
      tagsList:[
        {
          tag:'教程',
          href:'www.baidu.com'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>