<template>
  <div class="container"></div>
</template>

<script>
import countryData from "@/data/CountryData";

export default {
  name: "VacationPicker",
  data() {
    return {
      countryData,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: var(--cyan);
}
</style>
