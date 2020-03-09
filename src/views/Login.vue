<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <img
          src="../assets/bookshelf.svg"
          class="landing-image mb-4"
          alt="bookshelf"
          style="width:100px;height:100px;"
        />
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="danger"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          class="mb-2 alert"
          v-if="error"
        >
          <p>{{error}}</p>
          <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
        </b-alert>
        <b-alert v-if="user" v-model="showDismissibleAlert" variant="success" dismissible>{{success}}</b-alert>
        <div>
          <b-card title="Login" tag="article" class="mb-2 text-center login-card">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Email Address"
                label-for="input-1"
                style="text-align: left; font-size: 12px;"
              >
                <b-form-input
                  id="input-1 input"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password"
                label-for="input-2"
                style="text-align: left; font-size: 12px;"
              >
                <b-form-input
                  id="input-2 input"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
            <div class="signup-redirect mt-3">
              Don't have an account?
              <router-link to="/register" class="register-link">Sign Up</router-link>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      form: {
        email: "",
        password: ""
      },
      error: null,
      success: null
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
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
      // console.log(this.form);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.success = "Login Successful!";
          this.showDismissibleAlert = true;
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.error =
            "Sorry we couldn't find an account with those credentials.";
          this.showAlert();
        });

      // reset the form
      this.form = {
        email: "",
        password: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600&display=swap");
.container {
  .landing-image {
    margin: auto;
  }
  .alert-danger {
    width: 400px;
    margin: auto;
  }

  .login-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 25rem;
    border: none;
    background-color: #eee;
    .card-body {
      .card-title {
        font-family: "Quicksand", sans-serif;
      }
      form {
        .form-group {
          input.form-control {
            border-radius: 0px !important;
          }
          .register-link,
          .reset-password-link {
            color: #007bff;
            font-size: 12px;
          }
        }
        .btn:hover {
          font-weight: 600;
        }
      }
      .signup-redirect {
        font-size: 12px;
        .register-link {
          color: #007bff;
        }
      }
    }
  }
}
</style>