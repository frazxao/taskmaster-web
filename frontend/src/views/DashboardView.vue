<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <Navbar />

  <div class="dashboard">
    <div class="hero">
      <h1>TaskMaster</h1>

      <p>
        Sistema de gerenciamento de tarefas desenvolvido com
        Vue.js, Node.js, Express e Supabase.
      </p>
    </div>

    <div class="card">
      <h2>Projeto Acadêmico</h2>

      <p>
        Este sistema permite autenticação de usuários,
        gerenciamento completo de tarefas e integração
        com banco de dados Supabase.
      </p>
    </div>
  </div>
</template>

<style scoped>
.dashboard{
  max-width:1000px;
  margin:auto;
  padding:40px;
}

.hero{
  background:white;
  padding:40px;
  border-radius:16px;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.hero h1{
  color:#1a73e8;
  margin-bottom:10px;
}

.card{
  background:white;
  margin-top:20px;
  padding:30px;
  border-radius:16px;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
}
</style>