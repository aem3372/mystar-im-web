<template>
  <div id="chat">
    <div class="head">
      <div class="pic-wrapper">
        <img class="pic" src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=aemloop&amp;width=60&amp;height=60&amp;type=sns&amp;_input_charset=UTF-8">
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="container">
      <div class="chat">
        <message-flow class="message-flow"></message-flow>
        <message-panel class="message-panel"></message-panel>
      </div>
      <div class="profile">
      </div>
    </div>
  </div>
</template>

<script>
import MessagePanel from './MessagePanel'
import MessageFlow from './MessageFlow'

export default {
  data () {
    return {
      title: '泛叶'
    }
  },
  components: {
    'message-panel': MessagePanel,
    'message-flow': MessageFlow
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.head {
  width: 100%;
  height: 72px;
  background: #d8e7f7;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.pic {
  width: 54px;
  height: 54px;
  border-radius: 4px;
  margin-left: 8px;
  margin-right: 8px;
}

.title {
}

.chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.message-flow {
  flex: 1;
  width: 100%;
  background-color: #d4e3f3;
}

.message-panel {
  width: 100%;
  height: 150px;
  border-bottom-left-radius: inherit;
}

.profile {
  width: 180px;
  height: 100%;
  background-color: #e6f0fb;
  border-bottom-right-radius: inherit;
  display: none;
}

#chat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-shadow: inherit;
  border-radius: inherit;
}
</style>
