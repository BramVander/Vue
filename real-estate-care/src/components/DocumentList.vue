<template>
  <h2>{{ title }}</h2>
  <div class="container">
    <div
      class="document-row"
      v-for="document in documentList.documents"
      :key="document.id"
    >
      <div class="document-container">
        {{ document.name }}
      </div>
      <div class="btn-container">
        <button class="btn">Upload</button>
        <button class="btn">Delete</button>
      </div>
    </div>
    <!-- <p>{{ text }}</p> -->
  </div>
</template>

<script>
import documentList from "@/data/DocumentList";

export default {
  name: "DocumentList",

  data() {
    return {
      documentList,
      title: "Kies een handleiding",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f1f2f3;
}

.document-row {
  display: flex;
  justify-content: space-between;
  color: var(--text);
}

.document-row:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5%;
  padding: 5px;
}

.document-container {
  display: flex;
  align-items: center;
}

.btn-container {
  display: flex;
  align-items: center;
}

.btn {
  border-radius: 5%;
  background-color: var(--cyan);
  text-transform: uppercase;
  margin: 2px;
}

.btn:hover {
  background-color: var(--text);
  color: var(--cyan);
}
</style>
