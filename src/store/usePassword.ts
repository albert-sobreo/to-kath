import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const usePassword = defineStore('password', () => {
  const password = ref("")
  const isAuthenticated = ref(
    localStorage.getItem("isAuthenticated") === "true"
  )

  const isCorrect = computed(() => {
    return password.value === import.meta.env.VITE_PASSWORD
  })

  const authenticate = () => {
    isAuthenticated.value = isCorrect.value

    // persist state
    localStorage.setItem("isAuthenticated", String(isAuthenticated.value))
  }

  const logout = () => {
    password.value = ""
    isAuthenticated.value = false
    localStorage.removeItem("isAuthenticated")
  }

  return {
    password,
    isCorrect,
    isAuthenticated,
    authenticate,
    logout
  }
})
