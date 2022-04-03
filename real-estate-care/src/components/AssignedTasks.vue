<template>
  <div class="container">
    <h1>Toegewezen taken</h1>
    <div class="list">
      <div class="task-row" v-for="task in assignedTasks.tasks" :key="task.id">
        <div class="task-container">
          {{ task.name }}
        </div>
        <div class="btn-container">
          <button class="btn" @click="openModal">Inzien</button>
          <button class="btn">Bewerken</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import assignedTasks from "@/data/AssignedTasks";

export default {
  name: "AssignedTasks",

  data() {
    return {
      assignedTasks,
    };
  },

  methods: {
    // open document in modal
    openModal(e) {
      e.preventDefault();
      alert(`modal opened https://vuejs.org/examples/#modal`);
    },
  },
};
</script>

<style scoped>
.list {
  background-color: white;
  border-radius: 0.25rem;
  padding: 5px;
}

.task-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
}

.task-row:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 0.25rem;
  padding: 5px;
}

.btn-container {
  display: flex;
  align-items: center;
}

.btn {
  display: flex;
  justify-content: center;
  margin: 2px;
}
</style>
