<template>
  <div id="text-content">
    <p class="text">{{message.content}}</p>
  </div>
</template>


<style>
#text-content {
  width: 100%;
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
