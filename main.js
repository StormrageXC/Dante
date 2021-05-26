import Vue from 'vue';
import App from './src/app.vue';
import Router from 'vue-router';
import icon from './public/Dante.png'
// import A from './src/a.vue';
// import B from './src/b.vue';
function initIcon(){
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = icon;
    document.firstElementChild.firstChild.appendChild(link);
}
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
    el: '#app',
    // render: (h) => h(App),
    components: { App },
    template: '<App/>'
})
// app.$mount('#app')
initIcon();