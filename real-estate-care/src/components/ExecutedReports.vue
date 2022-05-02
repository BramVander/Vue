<template>
  <h1>Uitgevoerde rapportages</h1>
  <modal-list :prop="this.reports" />
</template>

<script>
import ModalList from "./ModalList.vue";
import MyService from "@/services/MyService";

export default {
  name: "ExecutedReports",

  components: {
    ModalList,
  },

  data() {
    return {
      reports: [],
    };
  },

  // on page create we fetch the data
  mounted() {
    const executedReports = new MyService();
    executedReports.getReports().then((data) => {
      this.reports = data;
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
