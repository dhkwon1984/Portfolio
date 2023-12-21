import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import PortfolioList from './views/PortfolioList.vue'
import PortfolioDetail from './views/PortfolioDetail.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/portfolio', component: PortfolioList },
  { path: '/portfolio/:id', component: PortfolioDetail },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
