<template>
  <div id="message-flow">
    <div v-for="message in messages">
      <bubble-layout :message="message">
        <text-content v-if="message.type === 'text'" slot="content" :message="message"></text-content>
        <grally-content v-else slot="content" :message="message"></grally-content>
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
import GrallyContent from './message/GrallyContent'

export default {
  props: {
    messageStore: Object
  },
  components: {
    'bubble-layout': BubbleLayout,
    'text-content': TextContent,
    'grally-content': GrallyContent
  },
  data () {
    return {
      messages: this.messageStore.getRawMessages()
    }
  }
}
</script>
