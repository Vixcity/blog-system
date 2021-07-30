<template>
  <vuescroll>
    <div class="messageBoard">
      <contentBanner :imgSrc="bannerSrc" :title="title" />
      <div class="container">
        <div class="page">
          <div class="category-lists">
            <div class="msg-cloud-title is-center">
              {{ title }} -
              <span class="msg-cloud-amount">{{ msgs.length }}</span>
            </div>
            <div class="msg-cloud-list">
              <hr>
              <quill-editor
                  :content="content"
                  :options="editorOption"
                  @change="onEditorChange($event)"
              />
              <span class="SizeTiShi">{{ TiLength }}/300</span>
              <hoverButton
                  :styles="{'margin-top': '.2rem','width': '1rem','height': '.3rem','line-height':'.3rem','font-size':'.15rem'}"
                  :type="2"
                  text="提交留言"
                  @click.native="btnClick"
              />
              <hr class="cyberpunkLine"/>
              <div v-for="(item,index) in msgs" :key="index" class="msgInfo flex">
                <img :src="item.gravatarSrc" alt="">
                <div>
                  <div class="name">
                    <span>{{ item.userName }}</span>
                    <time>/ {{ item.reTime }}</time>
                  </div>
                  <div class="output" v-html="item.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <asideContent />
      </div>
    </div>
  </vuescroll>
</template>

<script>
import contentBanner from "../../components/contentBanner/contentBanner";
import asideContent from "../../components/asideContent/asideContent";
import hoverButton from "../../components/hoverButton/hoverButton";
import vuescroll from 'vuescroll'
import { Quill } from 'vue-quill-editor'
import { ImageExtend, QuillWatch } from 'quill-image-extend-module'

Quill.register('modules/ImageExtend', ImageExtend)

export default {
  name: "messageBoard",
  components:{
    contentBanner,
    asideContent,
    hoverButton,
    vuescroll
  },
  mounted() {
    this.ready()
    this.$('.__vuescroll').css('height','100vh')
  },
  data() {
    return{
      title:'留言板',
      content: '',
      TiLength: 0,
      bannerSrc:'',
      editorOption: {
        theme: 'snow',
        boundary: document.body,
        modules: {
          ImageExtend: {
            loading: true,
            name: 'img',
            action: 'https://github.surmon.me/images/',
            response: (res) => {
              console.log(res);
              return res.info
            }
          },
          toolbar: {
            container:[
              ['link', 'image', 'emoji']
            ],
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          },
          "emoji-toolbar": true,
          "emoji-shortname": true,
        },
        readOnly: false,
        placeholder: "请输入正文",
      },
      msgs:[]
    }
  },
  methods:{
    ready() {
      console.log('%c笔落惊风雨，\n诗成泣鬼神。',"font-family:演示夏行楷,缘缘体行书,华文行楷;color: #005CAF;font-wight:700;font-size:35px");
      this.$api.getMsgsInfoList().then(r=>{
        this.title = r.data.title
        this.msgs = r.data.msgs
      })
      this.$api.getMsgsBannerSrc().then(r => {
        this.bannerSrc = r.data.url
        if(localStorage.getItem('browser')==='Chrome') {
          console.log("%c ", "background: url("+ r.data.url +") no-repeat 40% 70%;padding-left:480px;padding-bottom: 400px;")
        } else if (localStorage.getItem('browser')==='Firefox') {
          console.log("%c火狐浏览器暂不支持在控制台查看图片，请于谷歌查看", "font-size:20px")
        }
      })
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      quill.deleteText(300,4)
      if(this.content===""){
        this.TiLength = 0
      } else {
        this.TiLength = quill.getLength() - 1 
      }
      this.content = html
    },
    btnClick() {
      console.log(this.content)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>