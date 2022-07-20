<template>
  <div class="container">
    <h1>Lijst</h1>
    <div
      class="list-row"
      v-for="inspection in this.sortedInspections"
      :key="inspection.id"
      :data-inspection-id="inspection.id"
      @click="showDetail(inspection)"
    >
      <div style="width: 50%">{{ inspection.name }}</div>
      <!-- we return the first 10 digits on inspection.data.date for YYYY-MM-DD -->
      <div>{{ inspection.data.date.slice(0, 10) }}</div>
    </div>
  </div>
</template>

<script>
import MyService from "@/services/MyService";

export default {
  name: "LijstComponent",

  data() {
    return {
      inspections: [],
      sortedInspections: [],
    };
  },

  mounted() {
    const assignedTasks = new MyService();
    assignedTasks.getInspections().then((data) => {
      this.inspections = data;
      // we need this.inspections to be immutable so we can search index with this.inspections[id-1]
      this.sortedInspections = data.slice();
      this.sortedInspections.sort(function (a, b) {
        let dateA = new Date(a.data.date);
        let dateB = new Date(b.data.date);
        return dateA - dateB;
      });
    });
  },

  methods: {
    showDetail(inspection) {
      this.$router.push({
        name: "detail",
        params: {
          id: inspection.id,
        },
      });
    },
  },
};
</script>

<style></style>
