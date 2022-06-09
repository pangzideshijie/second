import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Home = ()=> import('../views/Home')
const Cart = ()=> import('../views/Cart')

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    }
]
const router = new VueRouter({
    routes
})
export default router