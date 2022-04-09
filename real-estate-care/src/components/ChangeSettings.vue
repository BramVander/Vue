<template>
  <div class="container">
    <h1>Instellingen beheren</h1>
    <p>Beheer hier je instellingen</p>
    <div class="card">
      <form id="form-settings" action="">
        <div class="form-left">
          <div class="container-avatar">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
              id="avatar"
              class="avatar"
            />
            <button class="btn" @click="changeAvatar">Edit</button>
          </div>
          <label for="">Personeelsnr</label>
          <input
            id="personeelsnr"
            type="text"
            placeholder="#011235813"
            disabled
          />
          <label for="password">Wachtwoord</label>
          <input id="password" type="password" placeholder="#Pin" />
          <i id="eye" class="bi bi-eye-fill" @click="togglePassword"></i>
          <button class="btn" type="submit">Onthoud voorkeur</button>
        </div>
        <div class="form-right">
          <p>Darkmode</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p>Notifications</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeSettings",

  methods: {
    // show password after tuching the eye icon
    togglePassword() {
      document.getElementById("password").type == "password"
        ? (document.getElementById("password").type = "text")
        : (document.getElementById("password").type = "password");

      if (document.getElementById("eye").classList == "bi bi-eye-fill") {
        document.getElementById("eye").classList.remove("bi-eye-fill");
        document.getElementById("eye").classList.add("bi-eye-slash-fill");
      } else {
        document.getElementById("eye").classList.remove("bi-eye-slash-fill");
        document.getElementById("eye").classList.add("bi-eye-fill");
      }
    },

    changeAvatar(e) {
      // change avatar function
      e.preventDefault();
      console.log(
        `document.getElementById("avatar").setAttribute('src', 'uploaded img path')`
      );
      alert("avatar changed");
    },
  },
};
</script>

<style scoped>
.container-avatar {
  display: flex;
  flex-direction: row;
}

.btn {
  align-self: center;
  margin-inline: 20px;
  padding: 5px;
  width: 100%;
}

#form-settings {
  display: flex;
  flex-direction: row;
}

.form-left,
.form-right {
  display: flex;
  flex-direction: column;
}

.form-right {
  padding-top: 50px;
  padding-left: 20px;
}

.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

#eye {
  color: var(--cyan);
  position: relative;
  bottom: 32px;
  left: 170px;
}

#eye:hover {
  cursor: pointer;
}

/* switchbox darkmode & notifications */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin-block-end: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--cyan);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--cyan);
}

input:checked + .slider:before {
  -webkit-transform: translateX(12px);
  -ms-transform: translateX(12px);
  transform: translateX(12px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (max-width: 426px) {
  #form-settings {
    flex-direction: column;
  }
}
</style>
