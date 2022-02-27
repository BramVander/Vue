<template>
  <img alt="REC logo" src="./assets/logo.png" />
  <Vacation-picker />
</template>

<script>
import VacationPicker from "@/components/VacationPicker";

export default {
  name: "App",
  components: { VacationPicker },
};
</script>

<style>
:root {
  /* colors unrecognized
  --text: rgba(41, 52, 57, 0);
  --cyan: rgba(0, 170, 162, 0);
  --gradientBlue: rgba(71, 94, 108, 0);
  --gradientDark: rgba(20, 27, 31, 0); 
  */

  /* store colors */
  --text: #293439;
  --cyan: #00aaa2;
  --gradientLight: #475e6c;
  --gradientDark: #141b1f;
}

#app {
  background-color: var(--cyan);
}
</style>
