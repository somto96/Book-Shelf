<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <!-- <img
          src="../assets/bookshelf.svg"
          class="landing-image mb-2"
          alt="bookshelf"
          style="width:100px;height:100px;"
        />-->
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          class="mb-2 alert"
          v-if="error"
        >
          <!-- <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p> -->
          <p>{{error}}</p>
          <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
        </b-alert>
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="success"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          class="mb-2 alert"
          v-if="success"
        >
          <!-- <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p> -->
          <p>{{success}}</p>
          <b-progress variant="success" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
        </b-alert>
        <b-card title="Sign up" tag="article" class="mb-2 text-center sign-in-card">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Fullname"
              label-for="input-1"
              style="text-align: left; font-size: 12px;"
            >
              <b-form-input id="input-1" v-model="form.fullname" type="text" required placeholder></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Email Address"
              label-for="input-2"
              style="text-align: left; font-size: 12px;"
            >
              <b-form-input id="input-2" v-model="form.email" type="email" required placeholder></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Password"
              label-for="input-3"
              style="text-align: left; font-size: 12px;"
              class="mb-3"
            >
              <b-form-input
                id="input-3 "
                type="password"
                v-model="form.password"
                required
                placeholder
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Confirm password"
              label-for="input-4"
              style="text-align: left; font-size: 12px;"
              class="mb-3"
            >
              <b-form-input
                id="input-4"
                type="password"
                v-model="form.confirmPassword"
                required
                placeholder
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
          </b-form>
          <div class="login-redirect mt-3">
            Do you have an account?
            <router-link to="/" class="login-link">Log In</router-link>
          </div>
          <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      form: {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      error: null,
      success: null
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    onSubmit(evt) {
      evt.preventDefault();

      // Firebase Auth for sign in
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.fullname
            })
            .then(() => {
              this.success = "Registration successful!";
              this.showAlert();
              this.$router.push({ path: "/" });
            });
        })
        .catch(err => {
          // this.error = err.message;
          // this.showAlert();
        });

      // reset the form
      this.form = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  div {
    div {
      .sign-in-card {
        margin-left: auto;
        margin-right: auto;
        max-width: 25rem;
        border: none;
        background-color: #eee;
        border-radius: none !important;
        .card-body {
          .card-title {
            font-family: "Quicksand", sans-serif;
          }
          form {
            .form-group {
              input.form-control {
                border-radius: 0px !important;
              }
            }
            .btn:hover {
              font-weight: 600;
            }
          }
          .login-redirect {
            font-size: 12px;
            .login-link {
              color: #007bff;
            }
          }
        }
      }
    }
  }
}
</style>