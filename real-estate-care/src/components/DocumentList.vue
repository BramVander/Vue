<template>
  <div class="container">
    <h1>Kies een Document</h1>
    <div class="list">
      <div
        class="document-row"
        v-for="document in documentList.documents"
        :key="document.id"
      >
        <div class="document-container">
          {{ document.name }}
        </div>
        <div class="btn-container">
          <button class="btn" @click="openModal">Inzien</button>
        </div>
      </div>
    </div>
  </div>

  <modal-list prop="documentList" />
</template>

<script>
import documentList from "@/data/DocumentList";
import ModalList from "./ModalList.vue";

export default {
  name: "DocumentList",

  components: {
    ModalList,
  },

  data() {
    return {
      documentList,
    };
  },

  methods: {
    // open document in modal
    openModal(e) {
      e.preventDefault();
      alert(`modal opened https://vuejs.org/examples/#modal`);
    },
  },

  // OMZETTEN NAAR SERVICE
  // on page create we fetch the data
  // created() {
  //   fetch("/data/DocumentList.json").then((response) => response.json());
  //   .then((response) => console.log("response", response));
  //   console.log("documentList", documentList);
  // },
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
</style>
