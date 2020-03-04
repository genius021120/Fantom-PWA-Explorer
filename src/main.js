import Vue from 'vue'
import App from './App.vue'
import {router} from "./router.js";
import {apolloProvider} from "./apollo-provider.js";
import i18n from './i18n';
import './vue-timeago.js';
import {store} from "./store";

Vue.config.productionTip = false;

// measure performance
// Vue.config.performance = true;

new Vue({
    render: h => h(App),
    router,
    store,
    i18n,
    apolloProvider
}).$mount('#app');
