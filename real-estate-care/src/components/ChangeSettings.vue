<template>
  <div class="container">
    <h1>Instellingen beheren</h1>
    <p>Beheer hier je instellingen</p>
    <div class="card">
      <i class="bi bi-eye-fill"></i>

      <form id="form-settings" action="">
        <div class="form-left">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            class="avatar"
          />

          <label for="">Personeelsnr</label>
          <input
            id="personeelsnr"
            type="text"
            placeholder="#Personeelsnr"
            disabled
          />
          <label for="password">Wachtwoord</label>
          <input id="password" type="password" />
          <i id="eye" class="bi bi-eye-fill"></i>
        </div>
        <div class="form-right">
          <div>darkmode</div>
          <div>notifications</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeSettings",

  methods: {
    togglePassword() {
      document.getElementById("password").type == "password"
        ? (document.getElementById("password").type = "text")
        : (document.getElementById("password").type = "password");
    },
  },
};
</script>

<style scoped>
#form-settings {
  display: flex;
  flex-direction: row;
}

.form-left,
.form-right {
  display: flex;
  flex-direction: column;
}

.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

#eye {
  position: absolute;
  bottom: 24px;
  left: 370px;
}

#eye:hover {
  cursor: pointer;
}
</style>
