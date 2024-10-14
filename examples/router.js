import Vue from 'vue'
import Router from 'vue-router'
import Title from './views/Title/index.vue'
// import LayoutView from './layouts/layout';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'layouts',
            component: Title,
            // children: [
            //     {
            //         path: '/components/title',
            //         name: 'title',
            //         component: Title, 
            //     }
            // ]
        },
    ]
})
