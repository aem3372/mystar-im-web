<template>
  <div id="text-content">
    <p class="text">{{message.content}}</p>
  </div>
</template>


<style scoped>
#text-content {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 400px;
  min-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.text {
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  word-break: break-all;
  user-select: auto;
}
</style>

<script>
export default {
  props: {
    message: Object
  }
}
</script>
