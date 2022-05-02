<template>
  <!-- <div class="container">
    <h1>Toegewezen taken</h1>
    <div class="list">
      <div class="task-row" v-for="task in assignedTasks.tasks" :key="task.id">
        <div class="task-container">
          {{ task.name }}
        </div>
        <div id="modal" class="modal">
          <div class="modal-content">
            <span @click="toggleModal">&times;</span>
            <div v-for="task in assignedTasks.tasks" :key="task.id">
              {{ task }}
            </div>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn" @click="toggleModal">Inzien</button>
          <button class="btn">Edit</button>
        </div>
      </div>
    </div>
  </div> -->
  <h1>Toegewezen taken</h1>
  <modal-list :prop="this.inspections" />
</template>

<script>
import ModalList from "./ModalList.vue";
import MyService from "@/services/MyService";

export default {
  name: "AssignedTasks",

  prop: {
    prop: Object,
  },

  components: {
    ModalList,
  },

  data() {
    return {
      inspections: [],
    };
  },

  // on page create we fetch the data for documents
  mounted() {
    const assignedTasks = new MyService();
    assignedTasks.getInspections().then((data) => {
      this.inspections = data;
    });
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
