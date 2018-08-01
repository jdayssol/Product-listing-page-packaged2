import Vue from 'vue'
import Router from 'vue-router'
import ShowDetail from './components/ShowDetail/ShowDetail.vue'
import Cart from './views/TheApplication/TheContent/Cart/Cart.vue'
import Shows from './views/TheApplication/TheContent/Shows/Shows.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {name: 'shows', path: '/shows', component: Shows},
        {name: 'showDetail', path: '/shows/:showId', component: ShowDetail, props: true},
        {name: 'cart', path: '/cart', component: Cart, alias: '/cart'},
        {path: '', redirect: '/shows'}
    ]
})
