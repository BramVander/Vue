<template>
  <header>
    <nav class="nav">
      <img alt="REC logo" src="./assets/logo.png" @click="goHome" />
      <div class="nav-items">
        <!-- UIT TE VOEREN  -->
        <router-link
          to="/assigned-tasks"
          class="nav-item"
          title="Toegewezen rapportages"
          ><i class="bi bi-journal"></i>
        </router-link>

        <!-- INZIEN / BEWERKEN  -->
        <router-link
          to="/executed-reports"
          class="nav-item"
          title="Uitgevoerde rapportages"
          ><i class="bi bi-journal-check"></i>
        </router-link>

        <!-- DOCUMENTATIE  -->
        <router-link to="/document-list" class="nav-item" title="Documentatie"
          ><i class="bi bi-info-circle-fill"></i>
        </router-link>

        <!-- BEHEER  -->
        <router-link to="/settings" class="nav-item" title="Beheer"
          ><i class="bi bi-gear-fill"></i>
        </router-link>
      </div>
    </nav>
  </header>
  <div class="container">
    <router-view />
  </div>

  <footer>
    <router-link class="btn-bottom" to="/assigned-tasks">Taken</router-link>
    <router-link class="btn-bottom" to="/executed-reports"
      >Uitgevoerd</router-link
    >
    <router-link class="btn-bottom" to="/document-list"
      >Documentatie</router-link
    >
    <router-link class="btn-bottom" to="/settings">Beheer</router-link>
  </footer>
</template>

<script>
export default {
  name: "App",

  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");

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

/* disable nav menu buttons before login */
.disabled {
  pointer-events: none;
  cursor: default;
}

body {
  font-family: "Poppins", sans-serif !important;
  font-weight: 700 !important;
  color: var(--text);
}

#app {
  background-color: var(--cyan);
}

.container {
  background-color: #f1f2f3;
  border-radius: 0.25rem;
  margin-block: 1rem;
  padding: 1rem;
  text-align: center;
}

.card {
  margin-block: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row !important;
  text-align: left;
}

input {
  border: 1px solid var(--cyan);
  border-radius: 0.25rem;
  color: var(--cyan);
  margin-block: 0.25rem !important;
  padding: 0.25rem;
  font-weight: 700;
}

/* HEADER HEADER HEADER */
.nav {
  background-color: #f1f2f3;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
}

.nav-items {
  display: flex;
  justify-content: space-around;
  width: 70%;
}

.nav-item {
  background-color: var(--gradientLight);
  color: #f1f2f3;
  border: 3px solid var(--gradientLight);
  border-radius: 0.5rem;
  margin-inline-end: 1rem;
  text-decoration: none;
  padding: 1rem;
}

.nav-item:hover {
  background-color: #f1f2f3;
  color: var(--gradientLight);
  border: 3px solid var(--gradientLight);
}

.router-link-active {
  background-color: var(--cyan);
  border-color: var(--cyan);
}
.router-link-active:hover {
  background-color: #f1f2f3;
  color: var(--gradientLight);
  border: 3px solid var(--cyan);
}

/* LOGIN SCREEN */
.login-screen {
  display: flex;
  flex-direction: column;
}

/* DOCUMENT LIST */
.document-list {
  display: none;
}

/* SETTINGS */
.change-settings {
  display: none;
}

/* FOOTER FOOTER FOOTER */
footer {
  display: flex;
  background-color: #f1f2f3;
  justify-content: space-evenly;
}

/* overwrite router-link active class */
.btn-bottom {
  width: 25%;
  color: white;
  background-color: var(--gradientLight);
  border: 1px solid var(--text);
  padding: 1rem;
  text-align: center;
  text-decoration: none;
}

/* overwrite router-link hover class */
.btn-bottom:hover {
  border: 1px solid var(--text);
  color: white;
  background-color: var(--gradientLight);
  opacity: 0.75;
}

.btn {
  border-radius: 5%;
  border: 3px solid var(--cyan) !important;
  background-color: var(--cyan) !important;
  color: white !important;
  font-weight: 700 !important;
}

.btn:hover {
  border: 3px solid var(--cyan);
  background-color: white !important;
  color: var(--cyan) !important;
}

.btn-login {
  display: flex;
  align-items: center;
}
</style>
