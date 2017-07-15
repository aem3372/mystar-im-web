<<template>
  <div id="wrapper">
    <div id="app">
      <chat></chat>
    </div>
  </div>
</template>

<script>
import Chat from '../components/Chat'

export default {
  name: 'wrapper',
  components: {
    'chat': Chat
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  max-height: 560px;
  max-width: 680px;
}

@media screen and (max-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
  #app {
    max-height: 100%;
  }
}

chat {
  width: 100%;
  height: 100%;
}

#wrapper {
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
