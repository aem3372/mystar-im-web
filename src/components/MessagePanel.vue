<template>
    <div id="message-panel">
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #dae8f8;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
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

</style>

