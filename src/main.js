import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

Vue.filter('truncate', (value, truncate) => {
    if (truncate > 0) {
        return value.substr(0, truncate) + '...'
    }
    return value
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
