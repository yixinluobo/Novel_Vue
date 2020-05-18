import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import NovelDetail from '../views/NovelDetail.vue'
import Content from '../views/Content.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/noveldetail/:id',
    name: 'NovelDetail',
    component: NovelDetail
  },
  {
    path: '/content/:id',
    name: 'Content',
    component: Content
  },
]

const router = new VueRouter({
  routes
})

export default router
