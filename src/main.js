// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Conversation from './page/Conversation'

require('!style-loader!css-loader!./common/css/index.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Conversation/>',
  components: { Conversation }
})
