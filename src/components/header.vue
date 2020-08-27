<template>
  <div>
    <header class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-md navbar-light align-items-center">
            <!-- 漢堡選單 -->
            <button
              class="navbar-toggler border-0 px-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <font-awesome-icon icon="bars" class="text-dark" />
            </button>
            <!-- 漢堡選單 -->
            <router-link to="/" class="navbar-brand pl-5 pl-md-0 mb-2 logo ">
              <img src="../assets/ic-logo.svg" alt="navbar-brand"
            /></router-link>
            <!-- logo -->
            <router-link to="/userorder" class="nav-link ">
              <span
                ><font-awesome-icon
                  icon="shopping-cart"
                  class="text-danger"
                /><sup class="counter" v-if="length != 0">{{
                  length
                }}</sup></span
              >
            </router-link>

            <!-- //768px以下時選單內的購物車 -->

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto align-items-md-center text-center">
                <li class="nav-item dropdown mx-md-3">
                  <a
                    class="nav-link dropdown-toggle "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <font-awesome-icon icon="globe" class="text-dark" />
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item " href="#">中文</a>
                    <hr class="my-2" />
                    <a class="dropdown-item " href="#">English</a>
                  </div>
                </li>

                <li class="nav-item mr-md-3">
                  <router-link
                    to="/login"
                    class="nav-link text-dark border-sm-bottom p-2 animate_frame"
                    style="width:60px"
                    v-if="login == false"
                    >登入</router-link
                  >

                  <a
                    href=""
                    class="nav-link text-dark border-sm-bottom p-2 animate_frame"
                    style="width:60px"
                    v-else
                    @click.prevent="signout"
                    >登出</a
                  >
                </li>
                <li class="nav-item mr-md-3 w-100">
                  <a
                    class="nav-link text-dark p-2 animate_frame"
                    href="#"
                    style="width:60px"
                    >註冊</a
                  >
                </li>
                <li class="nav-item mr-md-3 w-100">
                  <router-link
                    to="/orderlist"
                    class="nav-link text-dark p-2 animate_frame"
                    style="width:60px"
                    >訂單</router-link
                  >
                </li>
                <li class="nav-item mr-md-3 w-100">
                  <router-link
                    to="/adminLogin"
                    class="nav-link text-dark p-2 animate_frame"
                    style="width:60px"
                    >後台</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      length: 0
    };
  },
  props: ["login"],
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.APIPATH}/logout`;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          console.log(response);
          location.reload();
        }
      });
    },
    // 登出事件可以內部直接做，因為不需要有變數判斷登入登出狀態來顯示按鈕
    Cartlength(num) {
      this.length = num;
    }
  },

  computed: {
    // Cartlength() {
    //   return num;
    // }
  },
  created() {
    eventBus.$on("CartNum", num => {
      this.Cartlength(num);
    });
  }
};
</script>

<style lang="scss" scope>
// header
.logo {
  background-color: transparent;
}
.logo:focus {
  background-color: transparent;
  outline: none;
}
.navbar-nav {
  li {
    a {
      font-weight: bold;
    }
  }
}
header .nav-item {
  border-bottom: 1px solid #f1f0f8;
}

@media (min-width: 768px) {
  header .nav-item {
    border-bottom: 0;
  }
}
// header
</style>
