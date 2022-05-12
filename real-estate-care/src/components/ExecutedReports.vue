<template>
  <h1>Uitgevoerde rapportages</h1>
  <modal-list>
    <template v-slot:document>
      <div>
        <div class="list-row" v-for="report in this.reports" :key="report.id">
          <div>{{ report.name }}</div>
          <div class="btn-container">
            <button class="btn" @click="toggleModal">Inzien</button>
            <button class="btn">Edit</button>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modal>
      <div class="report-content"></div>
    </template>
  </modal-list>
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

  // on page create we fetch the data for executed reports
  // and store it in this.reports
  mounted() {
    const executedReports = new MyService();
    executedReports.getReports().then((data) => {
      this.reports = data;
    });
  },
};
</script>

<style scoped></style>
