<template>
    <div id="message-panel">
      <div class="quick-send">
        <div class="item" @click="sendProfile">个人介绍</div>
        <div class="item" @click="sendRecentPhoto">摄影作品</div>
      </div>
      <div class="toolbar">
        <div class="express iconfont">&#xe7a1;</div>
        <div class="appreciate iconfont">&#xe7f4;</div>
      </div>
      <input-panel class="input" :messageStore="messageStore"></input-panel>
    </div>
</template>

<script>
import InputPanel from './InputPanel'

export default {
  props: {
    messageStore: Object
  },
  components: {
    'input-panel': InputPanel
  },
  methods: {
    sendProfile () {
      this.messageStore.addNewMessage({
        direction: 'R',
        type: 'text',
        content: '你好，我是泛叶。我是一个coder，兴趣爱好是摄影。目前在杭州，欢迎来杭州找我玩~'
      })
    },
    sendRecentPhoto () {
      this.messageStore.addNewMessage({
        direction: 'R',
        type: 'grally',
        imagePath: 'https://photo.tuchong.com/1298029/f/14978409.jpg',
        title: '梦想小镇',
        tag: '图虫',
        imageWidth: 1200,
        imageHeight: 437
      })
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-family:"iconfont" !important;
  font-size: 18px;
  font-style: normal;
  color: #000;
  padding-top: 4px;
  padding-left: 8px;
}

.message-panel {
  display: flex;
  flex-direction: column;
}
.toolbar {
  height: 28px;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  background: #dae8f8;
}


.express .appreciate {
  margin-left: 5px;
}

.icon {
  justify-content: center;
}

.input {
  flex: 1;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.quick-send {
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #dae8f8;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.quick-send .item {
  font-size: 12px;
  color: #666;
  border:1px solid #666;
  border-radius: 12px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 8px;
}

</style>

