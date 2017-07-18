<template>
  <div id="message-flow">
    <div v-for="message in messages">
      <text-bubble :message="message"></text-bubble>
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
import TextBubble from './message/TextBubble'

export default {
  props: {
    messageStore: Object
  },
  components: {
    'text-bubble': TextBubble
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
