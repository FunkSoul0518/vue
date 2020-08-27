<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <!-- Product -->
    <main class="product mt-4">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3">
            <h2 class="title mb-4">商品列表</h2>
            <div class="d-flex filter flex-column flex-md-row">
              <a
                href=""
                class="btn btn-dark mr-3 mb-3 mb-md-0"
                @click.prevent="
                  filterText = '';
                  getProduct(1);
                "
                >全部商品</a
              >
              <a
                href=""
                class="btn btn-outline-primary mr-3 mb-3 mb-md-0"
                @click.prevent="
                  filterText = '別墅';
                  getProduct('All');
                "
                >別墅</a
              >
              <a
                href=""
                class="btn btn-outline-success mr-3 mb-3 mb-md-0"
                @click.prevent="
                  filterText = '飯店';
                  getProduct('All');
                "
                >飯店</a
              >
              <a
                href=""
                class="btn btn-outline-dark mr-3 mb-3 mb-md-0"
                @click.prevent="
                  filterText = '小木屋';
                  getProduct('All');
                "
                >小木屋</a
              >

              <a
                href=""
                class="btn btn-outline-danger mr-3 mb-3 mb-md-0"
                @click.prevent="openStarModal()"
                >我的最愛</a
              >
            </div>
          </div>
        </div>

        <!-- 篩選 -->
        <ul class="row p-0">
          <li
            class="col-12 mb-5 col-md-6 col-lg-4 animate_shakex"
            v-for="item of filterData"
            :key="item.id"
          >
            <div class="card border-0 shadow">
              <div
                class="card-info-img position-relative bg-cover rounded mb-3"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              >
                <a
                  href=""
                  class="position-absolute img-cover"
                  @click.prevent="toLink(item.id)"
                >
                  <p>查看更多</p>
                </a>
              </div>
              <div class="card-body p-2">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <a
                    href="#"
                    class="text-danger "
                    @click.prevent="AddStar(item)"
                    >我的最愛
                    <font-awesome-icon
                      icon="minus"
                      v-if="star.includes(item.title)"
                    /><font-awesome-icon icon="plus" v-else />
                  </a>
                </div>
                <div class="card-text">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <span class="text-danger mr-2"
                      >TWD {{ item.price | currencyFilter }}</span
                    >
                    <del class="text-secondary"
                      >TWD {{ item.origin_price | currencyFilter }}</del
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 篩選 -->
      </div>
    </main>
    <!-- Product -->

    <!-- 分頁 -->
    <template v-if="filterText == ''">
      <div class="container">
        <Paginate :pages="pagination" @changePagnation="getProduct"></Paginate>
      </div>
    </template>
    <!-- 分頁  -->

    <!-- 我的最愛Modal -->

    <div
      class="modal fade"
      id="starModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">我的最愛</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- vue-transition組件  -->
            <transition-group name="fade" tag="ul" class="row p-0">
              <li
                class="col-12 col-md-6 col-lg-12 mb-5"
                v-for="item of starData"
                :key="item.id"
              >
                <div class="card border-0 shadow like">
                  <img :src="item.imageUrl" alt="" />
                  <div class="card-body p-4">
                    <div class="d-flex justify-content-between">
                      <a
                        href="#"
                        class="card-title"
                        @click.prevent="toLink(item.id)"
                        >{{ item.title }}</a
                      >
                      <a
                        href="#"
                        class="text-danger "
                        @click.prevent="AddStar(item)"
                      >
                        <font-awesome-icon icon="minus"
                      /></a>
                    </div>
                    <div class="card-text">
                      <div>
                        <div class="d-flex justify-content-between mb-2">
                          <span class="text-danger mr-2 fz-sm">{{
                            item.price | currencyFilter
                          }}</span>
                          <del class="text-secondary  fz-sm">{{
                            item.origin_price | currencyFilter
                          }}</del>
                        </div>
                        <a
                          href=""
                          class="btn btn-outline-primary btn-sm w-100"
                          @click.prevent="toLink(item.id)"
                          >查看更多</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </transition-group>
            <!-- vue-transition組件  -->
          </div>
          <div
            class="
                          modal-footer"
          >
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的最愛 -->
  </div>
</template>

<script>
import Paginate from "../components/Pagination";
import $ from "jquery";
import { eventBus } from "../main";

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
  components: { Paginate },

  methods: {
    getProduct(page = 1) {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      // 後面依照全部商品跟個別品項的區別 補上後續API的內容 /?page=${page}   /all    api改用let才可以更動
      vm.isLoading = true;

      if (page == "All") {
        api += `/all`;
      } else {
        api += `?page=${page}`;
      }
      //依照點選的商品內容分別接兩種API
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        if (page !== "All") {
          vm.pagination = response.data.pagination;
        } else {
          vm.products = vm.products.reverse();
          // 商品順序反轉
        }
      });
    },
    AddStar(item) {
      const vm = this;
      if (!vm.star.includes(item.title)) {
        vm.star.push(item.title);
        eventBus.$emit("message:push", "加入成功!", "success");
      } else {
        for (let i = 0; i < vm.star.length; i++) {
          if (vm.star[i] === item.title) {
            vm.star.splice(i, 1);
            eventBus.$emit("message:push", "取消成功!", "danger");
            break;
          }
        }
      }
      localStorage.setItem("list", JSON.stringify(vm.star));
    },
    toLink(id) {
      $("#starModal").modal("hide");
      this.$router.push(`/roominfo/${id}`);
    },
    openStarModal() {
      const vm = this;
      $("#starModal").modal("show");
    }
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.filterText == "") {
        return vm.products;
      } else {
        return vm.products.filter(item => {
          return item.category == this.filterText;
        });
      }
    },
    starData() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.$http.get(api).then(response => {
        vm.starFilter = response.data.products;
      });
      //重新接一個沒有分頁的API，避免star只跟該分頁的檔案做比對
      return vm.starFilter.filter(item => {
        return vm.star.indexOf(item.title) > -1;
      });
    }
  },

  created() {
    this.getProduct();
  }
};
</script>

<style lang="scss" scope>
// product
.card-info-img {
  height: 180px;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  a {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.4s;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px 10px;
    }
  }
}
.card-info-img:hover {
  a {
    opacity: 1;
    p {
      color: #fff;
    }
  }
}
// product

.like img {
  width: 100%;
  object-fit: cover;
}
</style>
