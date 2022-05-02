<template>
  <div class="container">
    <div class="list">
      <div class="document-row" v-for="item in prop" :key="item.id">
        <div class="document-container">
          {{ item.name }}
        </div>
        <div id="modal" class="modal">
          <div class="modal-content">
            <span @click="toggleModal">&times;</span>
            <!-- <div v-for="task in assignedTasks.tasks" :key="task.id"> -->
            <!-- {{ task }} -->
            <!-- </div> -->
          </div>
        </div>
        <div class="btn-container">
          <button class="btn" @click="toggleModal">Inzien</button>
          <button class="btn">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalList",

  props: {
    prop: Object,
  },

  methods: {
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
};
</script>

<style scoped>
.list {
  background-color: white;
  border-radius: 0.25rem;
  padding: 5px;
}

.document-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
}

.document-row:hover {
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
  font-size: 50px;
  text-align: center;
}

span:hover {
  cursor: pointer;
}
</style>
