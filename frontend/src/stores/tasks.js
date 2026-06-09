import { defineStore } from 'pinia'
import api from '../services/api'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),

  actions: {
    async fetchTasks(token) {
      const response = await api.get('/tasks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      this.tasks = response.data
    },

    async createTask(task, token) {
      await api.post(
        '/tasks',
        task,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      await this.fetchTasks(token)
    },

    async deleteTask(id, token) {
      await api.delete(
        `/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      await this.fetchTasks(token)
    },

    async updateTask(id, task, token) {
      await api.put(
        `/tasks/${id}`,
        task,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      await this.fetchTasks(token)
    }
  }
})