<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

      <router-link
        to="/"
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
      >Home</router-link>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a
            class="nav-link"
            href="#"
            @click.prevent="signout"
          >登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      signout() {
        const vm = this;
        const api = `${process.env.APIPATH}/logout`;
        vm.isLoading = true;
        this.$http.post(api).then((response) => {
          if (response.data.success) {
            vm.$router.push("/adminlogin");
            vm.isLoading = false;
          }
        });
      },
    },
  };
</script>

<style lang="scss" scope>
  body {
    font-size: 0.875rem;
  }

  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }
  /*
       * Navbar
       */

  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
  /*
       * Navbar
       */
</style>
