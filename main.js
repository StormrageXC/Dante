import Vue from 'vue';
import App from './src/app.vue';
import Router from 'vue-router';
// import A from './src/a.vue';
// import B from './src/b.vue';
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [{
            path: '/A',
            name: 'A',
            component: () =>
                import ('./src/a.vue')
        },
        {
            path: '/B',
            name: 'B',
            component: () =>
                import ('./src/b.vue')
        },
        {
            path: '*',
            redirect: '/A'
        }
    ]
})
const app = new Vue({
    router,
    // el: '#app',
    // render: (h) => h(App),
    components: { App },
    template: '<App/>'
})
app.$mount('#app')