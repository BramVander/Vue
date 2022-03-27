<template>
  <header>
    <nav class="nav">
      <img alt="REC logo" src="./assets/logo.png" />
      <div class="nav-items">
        <!-- UIT TE VOEREN  -->
        <a class="nav-item disabled" href="" title="Uit te voeren"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-journals"
            viewBox="0 0 16 16"
          >
            <path
              d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
            />
            <path
              d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
            />
          </svg>
        </a>

        <!-- INZIEN / BEWERKEN  -->
        <a class="nav-item disabled" href="" title="Inzien / bewerken"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-journal-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path
              d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
            />
            <path
              d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
            />
          </svg>
        </a>

        <!-- DOCUMENTATIE  -->
        <a
          class="nav-item disabled"
          href=""
          title="Documentenlijst"
          @click="toggleDocumentView"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
        </a>

        <!-- BEHEER  -->
        <a
          class="nav-item disabled"
          href=""
          title="Beheer"
          @click="changeSettings"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
            />
          </svg>
        </a>
      </div>
    </nav>
  </header>
  <Login-screen class="login-screen" />
  <Document-list class="document-list" />
  <Change-settings class="change-settings" />

  <footer>
    <button>Taken</button>
    <button>Inzien</button>
    <button @click="toggleDocumentView">Documenten</button>
    <button @click="changeSettings">Beheer</button>
  </footer>
</template>

<script>
import DocumentList from "@/components/DocumentList";
import LoginScreen from "@/components/LoginScreen";
import ChangeSettings from "@/components/ChangeSettings";

export default {
  name: "App",
  components: { DocumentList, LoginScreen, ChangeSettings },

  methods: {
    toggleDocumentView(e) {
      e.preventDefault();
      // toDo: store components in elements outside of function
      const list = document.querySelector(".document-list");

      document.querySelector(".change-settings").style.display = "none";
      list.style.display == "block"
        ? (list.style.display = "none")
        : (list.style.display = "block");
    },

    changeSettings(e) {
      e.preventDefault();
      // toDo: store components in elements outside of function
      const setting = document.querySelector(".change-settings");
      document.querySelector(".document-list").style.display = "none";
      setting.style.display == "block"
        ? (setting.style.display = "none")
        : (setting.style.display = "block");
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

button {
  width: 25%;
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

/* disable nav menu buttons before login */
.disabled {
  pointer-events: none;
  cursor: default;
}

.nav-item:hover {
  background-color: #f1f2f3;
  color: var(--gradientLight);
  border: 3px solid var(--gradientLight);
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

button {
  background-color: var(--gradientLight);
  border: 1px solid var(--text);
  padding: 1rem;
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
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
</style>
