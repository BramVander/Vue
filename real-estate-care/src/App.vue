<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <vacation-picker />
</template>

<script>
import VacationPicker from "./components/VacationPicker.vue";

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
