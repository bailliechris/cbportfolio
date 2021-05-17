import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Buefy from "buefy";
import 'vue-material-design-icons/styles.css';
import 'buefy/dist/buefy.css'
import Twitter from 'vue-material-design-icons/Twitter.vue';
import GitHub from 'vue-material-design-icons/Github.vue';
 
//Add logo options
Vue.component('twitter-icon', Twitter);
Vue.component('github-icon', GitHub);

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
