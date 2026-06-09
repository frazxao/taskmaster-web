<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import { useTaskStore } from '../stores/tasks'

const taskStore = useTaskStore()

const token = localStorage.getItem('token')

const title = ref('')
const description = ref('')

const editingId = ref(null)

const createTask = async () => {
  await taskStore.createTask(
    {
      title: title.value,
      description: description.value,
      category_id: null
    },
    token
  )

  title.value = ''
  description.value = ''
}

const startEdit = (task) => {
  editingId.value = task.id
  title.value = task.title
  description.value = task.description
}

const saveEdit = async () => {
  await taskStore.updateTask(
    editingId.value,
    {
      title: title.value,
      description: description.value
    },
    token
  )

  editingId.value = null
  title.value = ''
  description.value = ''
}

const deleteTask = async (id) => {
  await taskStore.deleteTask(id, token)
}

onMounted(() => {
  taskStore.fetchTasks(token)
})
</script>

<template>
  <Navbar />

  <div class="container">
    <h1>Lista de Tarefas</h1>

    <div class="form-card">
      <h3>
        {{ editingId ? 'Editar Tarefa' : 'Nova Tarefa' }}
      </h3>

      <input
        v-model="title"
        placeholder="Título"
      />

      <textarea
        v-model="description"
        placeholder="Descrição"
      />

      <button
        v-if="!editingId"
        @click="createTask"
      >
        Adicionar
      </button>

      <button
        v-else
        @click="saveEdit"
      >
        Salvar Alterações
      </button>
    </div>

    <div
      class="task-card"
      v-for="task in taskStore.tasks"
      :key="task.id"
    >
      <h3>{{ task.title }}</h3>

      <p>{{ task.description }}</p>

      <div class="actions">
        <button @click="startEdit(task)">
          Editar
        </button>

        <button @click="deleteTask(task.id)">
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.form-card,
.task-card {
  background: white;
  padding: 20px;
  margin-top: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
}

input,
textarea {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
}

.actions {
  margin-top: 10px;
}
</style>