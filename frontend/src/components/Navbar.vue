<template>
  <nav class="navbar">
    <div class="logo">
      TaskMaster
    </div>

    <div class="links">
      <router-link to="/dashboard">
        Dashboard
      </router-link>

      <router-link to="/tasks">
        Tarefas
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  background:white;
  padding:16px 40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.logo{
  font-size:22px;
  font-weight:bold;
  color:#1a73e8;
}

.links{
  display:flex;
  gap:20px;
}

.links a{
  text-decoration:none;
  color:#5f6368;
  font-weight:600;
  transition:.2s;
}

.links a:hover{
  color:#1a73e8;
}

.router-link-active{
  color:#1a73e8 !important;
}
</style>