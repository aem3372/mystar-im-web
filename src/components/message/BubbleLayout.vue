<template>
  <div id="bubble-layout">
    <div v-if="message.direction === 'R'" class="left-layout">
      <div class="head">
        <img class="pic" src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=aemloop&amp;width=60&amp;height=60&amp;type=sns&amp;_input_charset=UTF-8">
        </img>
      </div>
      <div class="box">
        <div class="bubble">
          <div class="bubble-tail"></div>
          <div class="bubble-container">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="right-layout">
      <div class="box">
        <div class="bubble">
          <div class="bubble-container">
            <slot name="content"></slot>
          </div>
          <div class="bubble-tail"></div>
        </div>
      </div>
      <div class="head">
        <img class="pic" src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=aemloop&amp;width=60&amp;height=60&amp;type=sns&amp;_input_charset=UTF-8">
        </img>
      </div>
    </div>
  </div>
</template>


<style>
#bubble-layout {
  width: 100%;
}

.left-layout, .right-layout {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 12px;
}

.right-layout {
  justify-content: flex-end;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bubble {
  display: flex;
  min-height: 36px;
}

.pic {
  width: 40px;
  height: 40px;
  border-radius:20px
}

.bubble-container {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 0px;
  max-width: 400px;
  min-height: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
}

.text {
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  word-break: break-all;
  user-select: auto;
}

.left-layout .bubble-tail {
  margin-left: 6px;
  position: relative;  
  width:0px;  
  height:0px;  
  border-width:8px 14px 8px 0;  
  border-style: solid;  
  border-color: transparent #ffffff transparent transparent;  
  top: 9px;  
  left: 2px;
}

.right-layout .bubble-tail {
  margin-left: 6px;
  position: relative;  
  width:0px;  
  height:0px;  
  border-width:8px 0 8px 14px;  
  border-style: solid;  
  border-color: transparent transparent transparent #ffffff;  
  top: 9px;  
  left: -8px;
}

.left-layout .bubble-container {
  margin-right: 16px;
}

.right-layout .bubble-container {
  margin-left: 16px;
}
</style>

<script>
export default {
  props: {
    message: Object
  }
}
</script>
