<template>
  <div class="container">
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
  </div>

  <modal-list :prop="assignedTasks" />
</template>

<script>
import assignedTasks from "@/data/AssignedTasks";
import ModalList from "./ModalList.vue";

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
      assignedTasks,
    };
  },

  methods: {
    // method to show modal
    toggleModal(e) {
      e.preventDefault();
      // get modal element
      const modal = document.getElementById("modal");
      // open modal
      modal.style.display == "block"
        ? (modal.style.display = "none")
        : (modal.style.display = "block");
    },
  },

  //  OMZETTEN NAAR SERVICE
  // on page create we fetch the data
  // created() {
  // fetch("/data/AssignedTasks.json").then((response) => response.json());
  // .then((response) => console.log("response", response))
  // .then((response) => (this.prop = response));
  // console.log("assignedTasks", assignedTasks);
  // },
};
</script>

<style scoped>
span:hover {
  cursor: pointer;
}
span {
  font-size: 50px;
  text-align: center;
}

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

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  padding-block-start: 6.25rem;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  text-align: left;
}

.modal-content {
  padding: 10px;
}

.modal-content span {
  background-color: indianred;
}
</style>
