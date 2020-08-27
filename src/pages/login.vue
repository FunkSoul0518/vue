<template>
  <div>
    <header class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex  justify-content-between align-items-center py-3 px-md-0 py-md-4">
            <a href="Home.vue">
              <img
                src="../assets/ic-logo.svg"
                alt=""
              >
            </a>
            <a
              href="Home.vue"
              class="d-md-none text-dark"
            >
              <font-awesome-icon icon="times" />
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="login ">
      <section class="container ">
        <div class="row ">
          <div class="col-lg-6 d-none d-lg-block text-dark pt-6">

            <h2 class="title mb-3">
              An ideal hotel makes a wonderful Trip.
            </h2>
            <p class="">
              Discover your dream destination and hotel on ALOHA.com
            </p>
          </div>

          <div class="col-lg-4 col-md-6 col-12 pt-lg-6 offset-lg-2 offset-md-3 ">
            <h2 class="title mb-3 text-md-left text-center">Login</h2>
            <form>
              <div class="form-group">
                <label for="loginInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="user.username"
                >

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  v-model="user.password"
                >
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                >
                <label
                  class="form-check-label"
                  for="exampleCheck1"
                >Remember me</label>
              </div>

              <button
                type="submit"
                class="btn btn-primary w-100 py-3"
                @click.prevent="signin"
              >Login</button>

            </form>
            <small class="text-secondary">Don’t have an account yet?<a
                href=""
                class="ml-2"
              >Sign up</a></small>
          </div>

        </div>
      </section>

      <!-- 背景圖  -->
      <div class="loginBackground d-none d-md-block">
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col-lg-7 h-100 bg-cover"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        user: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      signin() {
        const api = `${process.env.APIPATH}/admin/signin`;
        const vm = this;
        vm.isLoading = true;
        this.$http.post(api, vm.user).then((response) => {
          console.log(response.data);
          vm.isLoading = false;
          if (response.data.success) {
            vm.$router.push("/");
          } else {
            alert("帳號密碼錯誤，請重新登入!!");
          }
        });
      },
    },
  };
</script>



<style lang="scss" scope>
  .loginBackground {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    .bg-cover {
      background: url(../assets/login.jpg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .login {
    input {
      height: auto;
    }
  }
</style>