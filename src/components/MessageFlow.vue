<template>
  <div id="message-flow">
    <div v-for="message in messages">
      <bubble-layout :message="message">
        <text-content slot="content" :message="message"></text-content>
      </bubble-layout>
    </div>
  </div>
</template>

<style scoped>
#message-flow {
  width: 100%;
  overflow-y: auto;
}

#message-flow::-webkit-scrollbar {
  width: 8px;
}
#message-flow::-webkit-scrollbar-thumb {
  background-color: #bdddf4;
  border-radius: 4px;
}

</style>

<script>
import BubbleLayout from './message/BubbleLayout'
import TextContent from './message/TextContent'

export default {
  props: {
    messageStore: Object
  },
  components: {
    'bubble-layout': BubbleLayout,
    'text-content': TextContent
  },
  data () {
    return {
      messages: this.messageStore.getRawMessages(),
      message1: {
        direction: 'R',
        content: 'content'
      },
      message2: {
        direction: 'R',
        content: '测试消息，测试消息，注意，这是一条测试消息，测试，测试测试消息，测试消息，注意，这是一条测试消息，测试，测试测试消息，测试消息，注意，这是一条测试消息，测试，测试测试消息，测试消息，注意'
      }
    }
  }
}
</script>
