<template>
  <div class="container">
    <h1>Welkom!</h1>
    <p>Log in met je gegevens om verder te gaan.</p>
    <div class="card">
      <div>
        <form id="form-login" action="">
          <label for="user">Gegevens monteur</label>
          <input
            id="user"
            class="input"
            type="number"
            placeholder="# Personeelsnr"
          />
          <label for="pin"></label>
          <input id="pin" class="input" type="password" placeholder="# Pin" />
          <label class="label-checkbox" for="remember"
            ><input id="remember" type="checkbox" checked="checked" />Onthoud
            mij</label
          >
        </form>
      </div>
      <div>
        <button
          class="btn btn-login"
          form="form-login"
          title="Log in"
          @click="logIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-person-badge-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",

  methods: {
    logIn(e) {
      e.preventDefault();
      const login = document.querySelector(".login-screen");
      login.style.display == "flex"
        ? (login.style.display = "none")
        : (login.style.display = "none");
    },
  },
};
</script>

<style>
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

form {
  display: flex;
  flex-direction: column;
  margin-inline-end: 1rem;
}

.input {
  border: 1px solid var(--cyan);
  border-radius: 0.25rem;
  color: var(--cyan);
  margin-block: 0.25rem;
  padding: 0.25rem;
  font-weight: 700;
}

.label-checkbox {
  padding-block-start: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

#remember {
  margin-inline-end: 10px;
}

/* doesnt recognize checkbox color
#remember:checked {
  background-color: var(--cyan) !important;
}
 */

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
  height: 100%;
  width: 100%;
  border-radius: 0.5rem !important;
}
</style>
