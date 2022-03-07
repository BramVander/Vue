<template>
  <VacationPicker />
</template>

<script>
import VacationPicker from "@/components/VacationPicker";

export default {
  name: "App",
  components: {
    VacationPicker,
  },
};
</script>

<style>
#app {
  color: #2c3e50 !important;
  margin-top: 60px;
}
</style>
