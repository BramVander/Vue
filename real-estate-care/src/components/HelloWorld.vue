<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Developed by {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #00aaa2;
}
</style>
