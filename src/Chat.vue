<template>
  <div id="app">
    <div class="container">
      <div class="messageFlow">flow</div>
      <div class="messagePanel">panel</div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1462687143_9003212.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1462687143_9003212.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1462687143_9003212.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1462687143_9003212.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1462687143_9003212.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:34px;/*px*/
  font-style:normal;
  color: #ccc;
  padding-top: 2px;/*px*/
}

.container {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
}

.messageFlow {
  flex: 1;
}

.messagePanel {
  height: 64px;
  width: 750px;
  text-align: center;
  background: #dddddd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 750px;
  max-width: 750px;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
}
</style>
