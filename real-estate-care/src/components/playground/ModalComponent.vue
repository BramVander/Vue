<template>
  <div class="container">
    <h1>Modal</h1>
    <div>{{ this.currentInspection }}</div>
    <!-- <div>{{ this.currentInspection.id }}</div> -->
    <!-- <div>{{ this.currentInspection["data"] }}</div> -->
    <!-- <div>{{ this.currentInspection["data"] }}</div> -->
    <!-- <div>{{ this.currentInspection.data.location }}</div> -->
  </div>
</template>

<script>
import MyService from "@/services/MyService";

export default {
  data() {
    return {
      currentInspection: [],
      data: [],
    };
  },

  created() {
    this.id = this.$route.params.id;
    console.log("id:", this.id);
  },
  mounted() {
    const assignedTasks = new MyService();
    assignedTasks.getInspections().then((data) => {
      this.currentInspection = data[this.id - 1];
      console.log("current", this.currentInspection);
    });
  },
};
</script>

<style></style>
