import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import axios from 'axios'
import router from "@/router";


import VuevideoPlayer from 'vue-video-player';

import 'video.js/dist/video-js.css';

const apis = {
  production: 'http://81.68.77.81:8864', // 线上 (生成环境)
  development: 'http://101.35.237.123:18081', // 本地 (开发环境)
}


Vue.prototype.axios= axios
// 配置请求的根路径
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? apis.production : apis.development

Vue.use(iView);

Vue.use(VuevideoPlayer);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
