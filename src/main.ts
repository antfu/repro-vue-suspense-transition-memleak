import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Foo from './foo.vue'
import Bar from './bar.vue'

const app = createApp(App)
const router = createRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
    },
    {
      path: '/bar',
      component: Bar,
    },
  ],
  history: createWebHistory(),
})
app.use(router)
app.mount('#app', true)
