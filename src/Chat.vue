<template>
  <div id="wrapper">
    <div id="app">
      <div class="head">
        <div class="pic-wrapper">
          <img class="pic" src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=aemloop&amp;width=60&amp;height=60&amp;type=sns&amp;_input_charset=UTF-8">
        </div>
        <div class="title">{{title}}</div>
      </div>
      <div class="container">
        <div class="chat">
          <div class="message-flow"></div>
          <message-panel class="message-panel"></message-panel>
        </div>
        <div class="profile">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessagePanel from './components/MessagePanel'

export default {
  name: 'wrapper',
  data () {
    return {
      title: 'aemloop'
    }
  },
  components: {
    'message-panel': MessagePanel
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
}

.head {
  width: 100%;
  height: 72px;
  background: #d8e7f7;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message-flow {
  flex: 1;
  width: 100%;
  background-color: #d4e3f3;
}

.message-panel {
  width: 100%;
  height: 120px;
}

.profile {
  width: 120px;
  height: 100%;
  background-color: #e6f0fb;
  border-bottom-right-radius: 8px;
}

#app {
  width: 100%;
  height: 100%;
  max-height: 560px;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px 0 #d2d2d2;
  border-radius: 8px;
}

#wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
