import { createRouter, createWebHistory } from 'vue-router'
import GameStart from '../views/game/GameStart.vue'
import GameRunning from '../views/game/GameRunning.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gameStart',
      component: GameStart
    },
    {
      path: '/game',
      name: 'gameRunning',
      component: GameRunning
    }
  ]
})

export default router
