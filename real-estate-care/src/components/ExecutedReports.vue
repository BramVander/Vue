<template>
  <div class="container">
    <h1>Uitgevoerde rapportages</h1>
    <div class="list">
      <div
        class="report-row"
        v-for="report in executedReports.reports"
        :key="report.id"
      >
        <div class="report-container">
          {{ report.name }}
        </div>
        <div class="btn-container">
          <button class="btn" @click="openModal">Inzien</button>
          <button class="btn">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import executedReports from "@/data/ExecutedReports";

export default {
  name: "ExecutedReports",

  data() {
    return {
      executedReports,
    };
  },

  methods: {
    //  open document in modal
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

.report-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
}

.report-row:hover {
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
