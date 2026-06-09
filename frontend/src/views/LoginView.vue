<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')

const router = useRouter()
const auth = useAuthStore()

const handleLogin = async () => {
  try {
    await auth.login(
      email.value,
      password.value
    )

    console.log('LOGIN OK')

    router.push('/dashboard')

  } catch (error) {
    console.error('ERRO LOGIN:', error)

    alert(error.message)
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>

    <input
      v-model="email"
      placeholder="Email"
    />

    <input
      type="password"
      v-model="password"
      placeholder="Senha"
    />

    <button @click="handleLogin">
      Entrar
    </button>
  </div>
</template>