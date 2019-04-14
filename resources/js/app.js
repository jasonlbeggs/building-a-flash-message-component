window.Vue = require('vue');
window.Bus = new Vue();

Vue.component('flash-message', require('./components/FlashMessage.vue').default);
Vue.component('trigger-form', require('./components/TriggerForm.vue').default);

const app = new Vue({
  el: '#app',
});
