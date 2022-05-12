<template>
  <div class="container">
    <div class="list">
      <div class="document-row">
        <slot name="document"></slot>
        <div id="modal" class="modal">
          <div class="modal-content">
            <span @click="toggleModal">&times;</span>
            <slot name="modal"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalList",

  methods: {
    // we need toggleModal for closing the modal. maybe refactor into service?
    toggleModal(e) {
      e.preventDefault();
      // get modal element
      const modal = document.getElementById("modal");
      // show modal
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
