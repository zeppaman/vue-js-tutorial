import { createApp } from 'vue'
import App from './App.vue'
import Basics from './components/Basics.vue'
import Logic from './components/Logic.vue'
import ListInteractive from './components/ListInteractive.vue'
import ListAPI from './components/ListAPI.vue'
// Load the Vue router
import { createWebHashHistory,createRouter} from 'vue-router'

const routes = [
    { path: '/', component: Basics },
    { path: '/logic', component: Logic },
    { path: '/list', component: ListInteractive },
    { path: '/todos', component: ListAPI },
  ]
  
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  }
  )
  


createApp(App).use(router).mount('#app')



