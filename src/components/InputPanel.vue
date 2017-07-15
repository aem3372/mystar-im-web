<template>
    <div class="panel">
      <textarea type="text" id="input-text"></textarea>
      <div class="operator-bar">
        <div class="send-btn">发送</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'panel'
}
</script>

<style scoped>
.iconfont {
  font-family:"iconfont" !important;
  font-size:18px;
  font-style:normal;
  color: #000;
  padding-top: 2px;
}
textarea {
  background:transparent;
  border-style:none; 
  outline:none;
  resize:none;
  font-size: 13.5px;
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  flex: 1;
  color: #A0A0A0;
  background: #d5e4f4;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}


textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-thumb {
  background-color: #bdddf4;
  border-radius: 4px;
}

.panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.operator-bar {
  display: flex;
  height: 32px;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #dae8f8;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.send-btn {
  font-size:14px;
  line-height: 24px;
  font-style:normal;
  color: #000;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 4px; 
  margin-right: 12px;
  padding-left: 16px;
  padding-right: 16px;
  background: #90c6f1;
  border-radius:4px;
}
</style>

