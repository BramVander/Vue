<template>
  <h1>Documentenlijst</h1>
  <modal-list>
    <template v-slot:document>
      <div>
        <div
          class="list-row"
          v-for="document in this.documents"
          :key="document.id"
        >
          <div>{{ document.name }}</div>
          <div class="btn-container">
            <button class="btn" @click="toggleModal">Inzien</button>
            <button class="btn">Edit</button>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modal>
      <div class="document-content"></div>
    </template>
  </modal-list>
</template>

<script>
import ModalList from "./ModalList.vue";
import MyService from "@/services/MyService";

export default {
  name: "DocumentList",

  components: {
    ModalList,
  },

  data() {
    return {
      documents: [],
    };
  },

  methods: {
    // open document in modal
    openModal(e) {
      e.preventDefault();
      alert(`modal opened https://vuejs.org/examples/#modal`);
    },
  },

  // on page create we fetch the data for documents
  // and store it in this.documents
  mounted() {
    const documentList = new MyService();
    documentList.getDocuments().then((data) => {
      this.documents = data;
    });
  },
};
</script>

<style scoped></style>
