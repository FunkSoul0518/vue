<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Alert></Alert>
    <Header></Header>
    <main class="UserOrder my-4">
      <div class="container">
        <div class="row">
          <!-- //訂單明細 -->
          <div class="col-lg-8 col-12 order-lg-1 order-2  ">
            <h2 class="title mb-4 text-danger">購物車</h2>
            <div class="d-md-flex mb-4 justify-content-between d-none k">
              <h5 class="border-bottom border-dark pb-2">
                1.確認購買清單
              </h5>
              <h5 class="text-secondary">2. 填寫訂單資料</h5>
              <h5 class="text-secondary">3. 完成訂單！</h5>
            </div>

            <!-- <ul class="p-0"> -->
            <transition-group name="fade" tag="ul" class="p-0">
              <li
                class="mb-4 pb-md-4 OrderCard"
                v-for="item of Cart"
                :key="item.id"
              >
                <div class="card border-0">
                  <div class="row no-gutters flex-column flex-md-row">
                    <div class="col-12 col-md-5">
                      <img
                        :src="item.product.imageUrl"
                        alt=""
                        class="rounded"
                      />
                    </div>
                    <div class="col-12 col-md-7">
                      <div
                        class="card-body d-flex flex-column flex-md-row py-4 py-md-0"
                      >
                        <ul class="p-0">
                          <li class="row mb-2 align-items-center">
                            <div class="col-2">
                              <font-awesome-icon icon="bed" class="mr-3" />
                            </div>
                            <div class="col-10">
                              <p class="mb-0">{{ item.product.title }}</p>
                              <small class="mb-0 text-secondary">{{
                                item.product.category
                              }}</small>
                            </div>
                          </li>
                          <!-- 1  -->
                          <li class="row mb-2">
                            <div class="col-2">
                              <font-awesome-icon
                                icon="calendar-alt"
                                class="mr-3"
                              />
                            </div>
                            <div class="col-8">
                              <p class="mb-0">17 June 2020 - 19 June 2020</p>
                              <small class="mb-0 text-secondary"
                                >2 nights・2 adults</small
                              >
                            </div>
                          </li>
                          <!-- 2  -->
                          <li class="row mb-4 mb-md-0 ">
                            <div class="col-2">
                              <font-awesome-icon
                                icon="dollar-sign"
                                class="mr-3"
                              />
                            </div>
                            <div class="col-8">
                              <p class="mb-0">
                                TWD {{ item.final_total | currencyFilter }}

                                <span class="ml-3 text-danger"
                                  >{{ item.qty }}{{ item.product.unit }}</span
                                >
                              </p>
                              <small class="mb-0 text-secondary"
                                >includes taxes and charges</small
                              >
                            </div>
                          </li>
                          <!-- 3 -->
                        </ul>
                        <div class="d-flex flex-column justify-content-around">
                          <a
                            href="#"
                            class="btn btn-primary mb-2"
                            @click.prevent="toLink(item.product_id)"
                            >商品細節</a
                          >
                          <!-- 上方跟home.vue不一樣不是item.id，要注意console階層  -->
                          <a
                            href="#"
                            class="btn btn-danger w-100"
                            @click.prevent="deleteModal(item)"
                            >刪除</a
                          >
                        </div>
                        <!-- <router-link to="/roominfo">view details</router-link> -->
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </transition-group>
            <!-- </ul> -->

            <div class="input-group mb-3 ">
              <div class="input-group">
                <select class="custom-select" v-model="coupon_code">
                  <option
                    v-for="item of coupons"
                    :key="item.id"
                    :value="item.code"
                    >{{ item.title }} 折扣比例:{{ item.percent }}%</option
                  >
                </select>
                <div class="input-group-append">
                  <button
                    class="btn btn btn-outline-danger"
                    type="button"
                    @click.prevent="AddCoupon"
                  >
                    套用優惠碼
                  </button>
                </div>
              </div>
            </div>
            <div
              class="text-right d-flex justify-content-between align-items-center"
            >
              <div class="d-flex">
                <strong class="text-dark mr-3"
                  >總價: {{ price.total | currencyFilter }}</strong
                >
                <span
                  class="text-danger"
                  v-if="price.total != price.final_total"
                  >折扣價:{{ price.final_total | currencyFilter }}</span
                >
              </div>
              <router-link to="/reserve" class="btn btn-primary"
                >送出</router-link
              >
            </div>
          </div>
          <!-- //訂單明細 -->

          <!-- 付款方式 -->
          <div
            class="col-lg-4 col-12 order-lg-2 order-1 shadow bg-info mb-6 pt-3"
          >
            <div
              class="payment_title d-flex justify-content-between align-items-center "
            >
              <div class="d-flex  ">
                <h2 class="title mr-3">付款人資訊</h2>
                <p class="bg-primary rounded-pill text-light p-2 ">
                  <font-awesome-icon icon="check" />
                  VERIFIED
                </p>
              </div>
              <a href="" class="mb-3">Edit</a>
            </div>

            <div
              class="payment rounded-lg p-4 row flex-column flex-md-row flex-lg-column mb-md-5 mb-lg-0 mb-5"
            >
              <div class="col-12 col-md-6 col-lg-12">
                <div class="user_details d-flex justify-content-between">
                  <div>
                    <h4 class="title mb-4">User details</h4>
                    <div class="d-flex">
                      <img
                        src="../assets/user.png"
                        alt=""
                        class="userImg d-lg-none d-md-block d-none mr-3"
                      />
                      <ul class="p-0 mb-4">
                        <li class="text-secondary mb-3">David Lin</li>
                        <li class="text-secondary mb-3">
                          david0520@mail.com.tw
                        </li>
                        <li class="text-secondary">+886 9 32 456 789</li>
                      </ul>
                    </div>
                  </div>

                  <img
                    src="../assets/user.png"
                    alt=""
                    class="userImg d-lg-block d-md-none"
                  />
                </div>
              </div>

              <div class="payment_method col-12 col-md-6 col-lg-12 ">
                <h4 class="title mb-4">Payment methods</h4>
                <div class="row ">
                  <div class="col-6 pr-0">
                    <div class="card  border-0">
                      <ul class="p-3 mb-0 text-secondary">
                        <li class="mb-1">xxxx-xxxx-7890</li>
                        <li class="mb-1">DAVID LIN</li>
                        <li
                          class="d-flex justify-content-between align-items-center"
                        >
                          <span>08/2029</span>
                          <font-awesome-icon :icon="['fab', 'cc-visa']" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6 pl-1">
                    <div
                      class="card border-0 ml-md-1 d-flex justify-content-center align-items-center h-100"
                    >
                      <button class="btn btn-primary  rounded-circle">
                        <font-awesome-icon icon="plus-circle" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 付款方式 -->
        </div>
      </div>
    </main>
    <!-- 推擠空間 -->
    <div class="my-6"></div>
    <!-- 推擠空間 -->

    <Sub></Sub>
    <Footer></Footer>

    <!-- 刪除Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModal">取消預約</h5>
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
            確定要刪除此商品嗎?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="deleteProduct()"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除Modal -->
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Sub from "../components/sub";
import $ from "jquery";
import Alert from "../components/AlertMsg";
import { eventBus } from "../main";
export default {
  data() {
    return {
      Cart: [],
      price: [],
      //放入價錢方便顯示折扣前後
      isLoading: false,
      temp: {},
      //放入暫存取得的ID
      coupons: [],
      //優惠碼列表
      coupon_code: ""
    };
  },
  components: { Header, Footer, Sub, Alert },
  methods: {
    toLink(id) {
      this.$router.push(`/roominfo/${id}`);
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.$http.get(api).then(response => {
        vm.Cart = response.data.data.carts;
        vm.price = response.data.data;
        eventBus.$emit("CartNum", vm.Cart.length);
        console.log(response);
      });
    },
    deleteModal(item) {
      $("#deleteModal").modal("show");
      this.temp = item;
      //先打開MODAL彈出 同時取得item並放到變數內方便取ID後面進編輯或是刪除
    },
    deleteProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${vm.temp.id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        vm.isLoading = false;
        $("#deleteModal").modal("hide");
        eventBus.$emit("CartNum", vm.Cart.length);
        vm.getCart();
        //刷新畫面
        eventBus.$emit("message:push", "刪除成功!", "danger");
      });
    },
    getCoupons(page = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
      });
    },
    AddCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      //存放要post回去的優惠碼變數
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        vm.isLoading = false;
        if (response.data.success) {
          vm.coupon_code = "";
          console.log(response.data);
          eventBus.$emit("message:push", "套用成功!", "success");
        } else {
          alert("查無此優惠碼");
        }
        vm.getCart();
      });
    }
  },
  created() {
    this.getCart();
    this.getCoupons();
  }
};
</script>

<style lang="scss" scope>
.del {
  text-decoration: line-through;
}
.OrderCard {
  border-bottom: 1px solid #f1f0f8;
}
.OrderCard img {
  width: 100%;
  object-fit: cover;
  height: 175px;
}

.userImg {
  object-fit: cover;
  width: 64px;
  height: 64px;
}

@media (max-width: 768px) {
  .OrderCard img {
    height: 186px;
  }
}

@media (max-width: 375px) {
  .OrderCard img {
    height: 226px;
  }

  .OrderCard {
    border-bottom: 0;
    .card-body {
      background-color: #f1f0f8;
      border-radius: 0px 0px 8px 8px;
    }
  }
}
</style>
