import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*路由懒加载 */
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
    { path:'/',redirect:"home"},
    { path: '/home', component: Home },
    { path: '/Category', component: Category },
    { path: '/Cart', component: Cart },
    { path: '/Profile', component: Profile }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;