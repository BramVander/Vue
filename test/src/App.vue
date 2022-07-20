<template>
  <div class="container">
    <main-navigation />
    <router-view />
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation";

export default {
  name: "App",
  components: { MainNavigation },
};
</script>

<style>
#app {
  color: #2c3e50 !important;
  margin-top: 60px;
}
</style>
