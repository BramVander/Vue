<template>
  <div class="container">
    <h1>Modal</h1>
    <div>{{ this.currentInspection }}</div>

    <label>Locatie</label>
    <textarea class="inspection-input" type="text" value="test"></textarea>

    <label>Locatie</label>
    <textarea class="inspection-input" type="text" value="test"></textarea>

    <label>Nieuwe schade</label>
    <input class="inspection-input" type="radio" checked />

    <label>Type schade</label>
    <input list="type" name="type" placeholder="Selecteer een type..." />
    <datalist id="type">
      <option value="moedwillig"></option>
      <option value="slijtage"></option>
      <option value="geweld"></option>
      <option value="normaal gebruik"></option>
      <option value="calamiteit"></option>
      <option value="anders">anders</option>
    </datalist>

    <label>Beschrijving</label>
    <input
      class="inspection-input"
      type="text"
      value="modalContent.description"
    />
  </div>
</template>

<script>
import MyService from "@/services/MyService";

export default {
  data() {
    return {
      currentInspection: [],
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
