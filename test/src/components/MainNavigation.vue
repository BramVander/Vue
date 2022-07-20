<template>
  <div class="row">
    <div class="col">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand transparent" to="/">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="add" exact
                >Add Country</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="update" exact
                >Update Country</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand img {
  width: 40px;
  height: 40px;
}

.router-link-active {
  background: darkslategray;
  color: greenyellow !important;
}

.transparent {
  background-color: transparent !important;
}
</style>
