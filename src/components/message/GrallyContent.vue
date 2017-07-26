<template>
  <div id="grally-content">
    <div class="grally">
      <div class="image" :style="imageStyleObject"></div>
      <div class="group">
        <div class="title">{{message.title}}</div>
        <div class="tag">{{message.tag}}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#grally-content {
  width: 100%;
  display: flex;
}

.grally {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 6px;
  padding-left: 4px;
  padding-right: 4px;
}

.title {
  font-size: 16px;
  margin-top: 3px;
  margin-left: 6px;
}

.image {
  border-radius: 8px;
  user-select: none;
  background-size: cover;
  background-position: center;
}

.group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tag {
  font-size: 12px;
  margin-top: 5px;
  margin-right: 4px;
}
</style>

<script>
export default {
  props: {
    message: Object
  },
  data () {
    return {
      imageStyleObject: {
        'background-image': 'url(' + this.message.imagePath + ')',
        width: this.message.imageWidth > this.message.imageHeight ? '256px' : '164px',
        height: this.message.imageWidth > this.message.imageHeight ? '164px' : '218px'
      }
    }
  }
}
</script>
