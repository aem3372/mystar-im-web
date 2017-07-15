<template>
  <div id="message-flow">
    <text-bubble :message="message1"></text-bubble>
    <text-bubble :message="message2"></text-bubble>
    <text-bubble :message="message2"></text-bubble>
    <text-bubble :message="message2"></text-bubble>
    <text-bubble :message="message2"></text-bubble>
  </div>
</template>

<style scoped>
#message-flow {
  width: 100%;
  overflow-y: scroll;
}
</style>

<script>
import TextBubble from './message/TextBubble'

export default {
  components: {
    'text-bubble': TextBubble
  },
  data () {
    return {
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
