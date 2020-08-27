<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Header :login="loginState"></Header>
    <Alert></Alert>
    <TopBtn></TopBtn>
    <Banner></Banner>
    <!-- Search -->
    <div class="search mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="card">
              <div class="card-body px-3 py-1">
                <form method="POST">
                  <div class="form-group pt-3 d-md-flex ">
                    <!-- 目的地 -->
                    <div class="dropdown mb-3 mb-md-0 mr-md-3">
                      <button
                        class="btn btn-light dropdown-toggle w-100 pl-md-2"
                        type="button"
                        id="DestinationButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="map-marker-alt"
                          class="text-dark mr-lg-3 "
                        />
                        Destination
                      </button>
                      <div
                        class="dropdown-menu w-100"
                        aria-labelledby="DestinationButton"
                      >
                        <a class="dropdown-item" href="#">1</a>
                        <a class="dropdown-item" href="#">2</a>
                        <a class="dropdown-item" href="#">3</a>
                      </div>
                    </div>
                    <!-- 目的地 -->
                    <!-- 日期  -->
                    <div class="dropdown mb-3 mb-md-0 mr-md-3">
                      <button
                        class="btn btn-light dropdown-toggle w-100"
                        type="date"
                        id="dateMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="calendar-alt"
                          class="text-dark mr-lg-3 mr-md-2"
                        />
                        check in
                      </button>
                      <input
                        type="date"
                        class="form-control dropdown-menu w-100 text-center p-3"
                        aria-labelledby="dateMenuButton"
                      />
                    </div>
                    <!-- 日期 -->
                    <!-- 人數 -->
                    <div class="dropdown mb-3 mb-md-0 mr-md-3">
                      <button
                        class="btn btn-light dropdown-toggle w-100"
                        type="button"
                        id="peopleButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="male"
                          class="text-dark mr-lg-3 mr-md-2 "
                        />
                        Guests
                      </button>
                      <div
                        class="dropdown-menu w-100"
                        aria-labelledby="peopleButton"
                      >
                        <!-- 1  -->
                        <div class="dropdown-item" href="#">
                          <div class="d-flex justify-content-between">
                            <p class="mb-0">Adult</p>
                            <div class="d-flex align-items-center ">
                              <a href="">
                                <font-awesome-icon
                                  icon="plus"
                                  class="text-dark"
                                />
                              </a>
                              <span class="mx-3">2</span>
                              <a href="">
                                <font-awesome-icon
                                  icon="minus"
                                  class="text-dark"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <!-- 2  -->
                        <div class="dropdown-item" href="#">
                          <div class="d-flex justify-content-between">
                            <p class="mb-0">Child</p>
                            <div class="d-flex align-items-center ">
                              <a href="">
                                <font-awesome-icon
                                  icon="plus"
                                  class="text-dark"
                                />
                              </a>
                              <span class="mx-3">0</span>
                              <a href="">
                                <font-awesome-icon
                                  icon="minus"
                                  class="text-dark"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <!-- 3  -->
                        <div class="dropdown-item" href="#">
                          <div class="d-flex justify-content-between">
                            <p class="mb-0">Room</p>
                            <div class="d-flex align-items-center ">
                              <a href="">
                                <font-awesome-icon
                                  icon="plus"
                                  class="text-dark"
                                />
                              </a>
                              <span class="mx-3">1</span>
                              <a href="">
                                <font-awesome-icon
                                  icon="minus"
                                  class="text-dark"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 人數 -->

                    <!-- search -->
                    <router-link
                      to="/search"
                      class="btn btn-primary flex-md-grow-1 search_result"
                      >Search</router-link
                    >
                    <!-- search -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Search -->
    <Feature></Feature>
    <!-- topCoices  -->
    <section class="topChoies mb-5">
      <div class="container">
        <div class="row">
          <div
            class="col-12"
            data-aos="fade-up"
            data-aos-offset="120"
            data-aos-duration="1200"
          >
            <div class="topChoice mt-3 ">
              <h2 class="font-weight-bold mb-4">隨機推薦</h2>
              <ul class="nav nav-tabs mb-4">
                <li class="nav-item">
                  <a class="nav-link font-weight-bold text-dark active "
                    >台北<sup class="text-danger">hot</sup></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link font-weight-bold text-dark"
                    href="#"
                    @click.prevent=""
                    >沖繩</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link font-weight-bold text-dark"
                    href="#"
                    @click.prevent=""
                    >巴黎</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    >更新中</a
                  >
                </li>
              </ul>
              <!-- 熱門區塊  -->

              <swiper :swiper="randomProducts" @toDetail="toLink"></swiper>

              <!-- 熱門區塊  -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- topCoices -->

    <!-- hotPlace -->
    <section class="hotPlace mb-5">
      <div
        class="container"
        data-aos="fade-up"
        data-aos-offset="350"
        data-aos-duration="1200"
      >
        <div class="row">
          <div class="col-12 mb-3">
            <h2>熱門景點</h2>
          </div>
        </div>

        <!-- 選單  -->
        <ul class="row p-0">
          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/japan.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">JAPAN</small>
                    <h5 class="text-light card-text">Osaka</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/Paris.jpg" class="card-img" alt="" />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">Franch</small>
                    <h5 class="text-light card-text">Paris</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/Europe.jpg" class="card-img" alt="" />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">Europe</small>
                    <h5 class="text-light card-text">Italy</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/banner.jpg" class="card-img" alt="" />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">Taiwan</small>
                    <h5 class="text-light card-text">墾丁</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/Usa.jpg" class="card-img" alt="" />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">Usa</small>
                    <h5 class="text-light card-text">Miami</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class="col-12 col-md-6 col-lg-4 mb-2 mb-md-4">
            <div class="card bg-dark text-white">
              <img src="../assets/Korea.jpg" class="card-img" alt="" />
              <div class="card-img-overlay p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <small class="text-secondary card-title mb-2">Korea</small>
                    <h5 class="text-light card-text">Busan</h5>
                  </div>
                  <a href="">
                    <font-awesome-icon icon="caret-down" class="text-light" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- hotPlace -->
    <!-- 商品區塊  -->
    <router-view
      data-aos="fade-up"
      data-aos-offset="350"
      data-aos-duration="1200"
    ></router-view>
    <!-- 商品區塊  -->

    <!-- //分隔用 -->
    <div class="my-5"></div>
    <!-- //分隔用 -->

    <Sub></Sub>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scope>
/* banner */

.banner {
  position: relative;
  img {
    object-fit: cover;
    height: 320px;
  }
}
.carousel-title {
  text-align: center;
  color: #fff;
  font-size: 3rem;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 1;
}

@media (max-width: 375px) {
  .carousel-title {
    font-size: 1.5rem;
    top: 44%;
  }
}

/* banner */

/* search */
.search {
  .card {
    background-color: #f1f0f8;
    border-radius: 8px;
    margin-top: -4%;
    border: 0;
  }
}

@media (min-width: 768px) {
  .dropdown {
    width: 25%;
  }
}

@media (max-width: 375px) {
  .search_result {
    width: 100%;
  }
}
/* search */

/* topCoices */
.topCoices li > a {
  font-weight: bold;
  color: black;
}
.topCoices ul li > img {
  width: 100%;
}
/* topCoices */

// hotPlace
.hotPlace .card > img {
  height: 78px;
  object-fit: cover;
  opacity: 0.8;
}
// hotPlace
</style>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Sub from "../components/sub";
import Banner from "../components/Banner";
import Feature from "../components/feature";
import swiper from "../components/productSwiper";
import Alert from "../components/AlertMsg";
import TopBtn from "../components/TopBtn";
import { eventBus } from "../main";

import $ from "jquery";
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      filterProducts: [],
      pagination: [],
      filterText: "",
      loginState: false,
      star: JSON.parse(localStorage.getItem("list")) || [],
      //我的最愛
      starFilter: [],
      randomProducts: []
    };
  },
  components: { Header, Footer, Sub, Feature, Banner, swiper, Alert, TopBtn },
  methods: {
    getProduct() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        this.random();
      });
    },
    toLink(id) {
      $("#starModal").modal("hide");
      this.$router.push(`/roominfo/${id}`);
    },
    SignCheck() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/user/check`;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.loginState = true;
        } else {
          vm.loginState = false;
        }
      });
    },
    random() {
      let vm = this;
      let newArray = [...vm.products];
      if (newArray.length >= 7) {
        for (let index = 0; index < 7; index++) {
          let n = Math.floor(Math.random() * newArray.length);
          vm.randomProducts.push(newArray[n]);
          newArray.splice(n, 1);
        }
        return vm.randomProducts;
      } else {
        return newArray;
      }
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.$http.get(api).then(response => {
        let num = response.data.data.carts.length;
        eventBus.$emit("CartNum", num);
      });
    }
  },
  computed: {},

  created() {
    this.getProduct();
    this.SignCheck();
    this.getCart();
  }
};
</script>
