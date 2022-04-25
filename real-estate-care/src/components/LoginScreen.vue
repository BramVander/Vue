<template>
  <div class="container">
    <h1>Welkom!</h1>
    <p>Log in met je gegevens om verder te gaan.</p>
    <div class="card">
      <div>
        <form id="form-login" action="">
          <label for="user">Gegevens monteur</label>
          <input id="user" type="number" placeholder="# Personeelsnr" />
          <label for="pin"></label>
          <input id="pin" class="input" type="password" placeholder="# Pin" />
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
    // login function
    logIn(e) {
      e.preventDefault();
      // check username vs pin
      const user = document.getElementById("user");
      const pin = document.getElementById("pin");
      console.log("user", user.value, "pin", pin.value);
      // nav to dashboard
      this.$router.push("dashboard");
      // enable nav menu buttons
      // const navItems = document.getElementsByClassName("nav-item");
      // for (let i = 0; i < navItems.length; i++) {
      //   navItems[i].classList.remove("disabled");
      // }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-inline-end: 1rem;
}

.btn-login {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem !important;
}

/* media query for mobile */
@media (max-width: 425px) {
  .card {
    flex-direction: column;
    align-items: center;
  }
}
</style>
