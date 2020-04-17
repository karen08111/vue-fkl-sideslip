import Vue from 'vue'
import App from './App.vue'

import fklInput from 'vue-fkl-input'
// import vueSideslip from '../packages/sideslip/index.js'
import 'vue-fkl-input/lib/fkl-input.css'

import vueSideslip from 'vue-fkl-sideslip'
import 'vue-fkl-sideslip/lib/vue-fkl-sideslip.css'

Vue.use(fklInput);
Vue.use(vueSideslip);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app');
