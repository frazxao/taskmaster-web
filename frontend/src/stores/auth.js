import { defineStore } from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),

  actions: {
    async login(email, password) {
  const response = await api.post('/auth/login', {
    email,
    password
  })

  console.log('RESPOSTA LOGIN:', response.data)

  this.token = response.data.data.session.access_token

  localStorage.setItem(
    'token',
    this.token
  )
},

    logout() {
      this.token = null
      localStorage.removeItem('token')
    }
  }
})