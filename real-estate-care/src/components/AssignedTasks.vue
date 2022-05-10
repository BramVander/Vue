<template>
  <h1>Toegewezen taken</h1>
  <modal-list>
    <div>
      <div
        class="list-row"
        v-for="inspection in this.inspections"
        :key="inspection.id"
      >
        <div style="width: 50%">{{ inspection.name }}</div>
        <!-- refactor to function instead of inline. so {{ this.getSlicedTime() }} -->
        <!-- we return the first 10 digits on inspection.data.date for YYYY-MM-DD -->
        <div>{{ inspection.data.date.slice(0, 10) }}</div>
        <div class="btn-container">
          <button class="btn" @click="toggleModal">Inzien</button>
          <button class="btn" @click="test">Edit</button>
        </div>
      </div>
    </div>
  </modal-list>
</template>

<script>
import ModalList from "./ModalList.vue";
import MyService from "@/services/MyService";

export default {
  name: "AssignedTasks",

  prop: {
    prop: Object,
  },

  methods: {
    test() {
      if (!this.inspections) return;
      this.sortedInspections = this.inspections;
      this.sortedInspections.sort(function (a, b) {
        let dateA = new Date(a.data.date);
        let dateB = new Date(b.data.date);
        return dateA - dateB;
      });
      console.log(JSON.parse(JSON.stringify(this.sortedInspections)));
      console.log(JSON.parse(JSON.stringify(this.inspections)));
    },
  },

  components: {
    ModalList,
  },

  data() {
    return {
      inspections: [],
      sortedInspections: [],
    };
  },

  // on page create we fetch the data for documents
  // and store it in this.inspections
  mounted() {
    const assignedTasks = new MyService();
    assignedTasks
      .getInspections()
      .then((data) => {
        this.inspections = data;
      })
      // we sort for date
      .then(
        this.inspections.sort(function (a, b) {
          let dateA = new Date(a.data.date);
          let dateB = new Date(b.data.date);
          return dateA - dateB;
        })
      )
      .then(this.test);
  },
};
</script>

<style scoped></style>
