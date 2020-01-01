import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import AddProduct from '../views/AddProduct.vue'
import Buyers from '../views/Buyers.vue'
import NewBuyer from '../views/NewBuyer.vue'
import BuyerOrders from '../views/BuyerOrders.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/buyers',
    name: 'buyers',
    component: Buyers
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/buyer/:id',
    name: 'buyerOrders',
    component: BuyerOrders
  },
  {
    path: '/add/product',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/new/buyer',
    name: 'newBuyer',
    component: NewBuyer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
