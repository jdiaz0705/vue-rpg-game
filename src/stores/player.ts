import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    username: ''
  }),
  actions: {
    setPlayerName(username: string) {
      this.username = username

      console.log(this.username)
    }
  }
})