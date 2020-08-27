<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Header></Header>
    <main class="Reserve pt-md-4">
      <section class="container">
        <div class="d-md-flex mb-4 justify-content-center d-none ">
          <h5 class="text-secondary mx-4">
            1.確認購買清單
          </h5>
          <h5 class="border-bottom border-dark pb-2 mx-4">2. 填寫訂單資料</h5>
          <h5 class="text-secondary mx-4">3. 完成訂單！</h5>
        </div>
        <div class="row">
          <!-- //用戶資訊 -->
          <div class="col-12 col-md-6 col-lg-4 offset-lg-2 order-2 order-md-1">
            <!-- <h2 class="title mb-4 mt-4 mt-md-0 ">預約聯絡人</h2> -->

            <form>
              <div class="form-group">
                <label for="InputName" class="text-secondary">姓名</label>
                <input
                  type="text"
                  class="form-control py-3 h-auto"
                  id="InputName"
                  name="name"
                  v-model="form.user.name"
                  :class="{ 'is-invalid': errors.has('name') }"
                  v-validate="'required'"
                  placeholder="輸入姓名"
                />
              </div>
              <div class="form-group">
                <label for="InputEmail1" class="text-secondary">Email</label>
                <input
                  type="email"
                  class="form-control py-3 h-auto"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  v-model="form.user.email"
                  :class="{ 'is-invalid': errors.has('email') }"
                  v-validate="'required|email'"
                  placeholder="輸入email"
                />
              </div>

              <div class="form-group mb-4">
                <label for="InputPhone" class="text-secondary">電話</label>
                <input
                  type="tel"
                  class="form-control py-3 h-auto"
                  id="InputPhone"
                  name="tel"
                  v-model="form.user.tel"
                  :class="{ 'is-invalid': errors.has('tel') }"
                  v-validate="'required'"
                  placeholder="輸入電話"
                />
              </div>

              <div class="form-group">
                <label for="InputAdress" class="text-secondary">地址</label>
                <input
                  type="text"
                  class="form-control py-3 h-auto"
                  id="InputAdress"
                  name="adress"
                  v-model="form.user.address"
                  :class="{ 'is-invalid': errors.has('adress') }"
                  v-validate="'required'"
                  placeholder="輸入地址"
                />
              </div>

              <div class="form-group">
                <label for="tips">備註</label>
                <textarea
                  class="form-control"
                  id="tips"
                  rows="3"
                  name="tips"
                  v-model="form.message"
                  :class="{ 'is-invalid': errors.has('tips') }"
                  v-validate="'required'"
                  placeholder="輸入備註"
                ></textarea>
              </div>

              <div class=" text-center">
                <button
                  class="btn btn-primary w-100 py-3"
                  @click.prevent="createOrder"
                >
                  Reserve
                </button>
              </div>
            </form>
          </div>
          <!-- //用戶資訊 -->
          <div class="col-12 col-md-6 col-lg-4  order-1 order-md-2 ">
            <div class="reserveInfo  position-relative">
              <div
                class="d-flex justify-content-between align-items-center bg-info d-md-none p-3 "
              >
                <div>
                  <span class="text-dark mr-2">Total</span
                  ><strong class="text-danger">{{
                    price.final_total | currencyFilter
                  }}</strong>
                </div>
                <a
                  href="#collapseBooking"
                  class="text-primary"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseBooking"
                  >Detail
                  <font-awesome-icon icon="chevron-down" />
                </a>
              </div>

              <div
                class="collapse BookingList d-md-block "
                id="collapseBooking"
              >
                <div class="card card-body bg-info p-md-4 border-0 pt-5">
                  <div class="mb-3 mb-md-4 pb-3 pb-md-4 border-bottom">
                    <h3 class="card-title mb-4">
                      訂單資訊
                    </h3>
                    <ul class="pl-0 text-secondary">
                      <li
                        class="mb-2 d-flex justify-content-between align-items-center pl-2"
                        v-for="item of Cart"
                        :key="item.id"
                      >
                        <p class="text-dark mb-0">
                          {{ item.product.title }}
                        </p>
                        <span class="text-secondary"
                          >{{ item.product.num }}{{ item.product.unit }}</span
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="mb-3 mb-md-4 pb-3 pb-md-4 border-bottom">
                    <h3 class="card-title mb-4">
                      金額
                    </h3>
                    <ul class="pl-0 text-secondary">
                      <li
                        class="d-flex justify-content-between align-items-center mb-2 text-dark pl-2"
                        v-for="item of Cart"
                        :key="item.id"
                      >
                        <p class="text-dark mb-0">
                          {{ item.product.title }}
                        </p>
                        <span class="text-success"
                          >TWD {{ item.product.price | currencyFilter }}</span
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center pl-2 font-weight-bold"
                  >
                    Total
                    <span
                      class="card-title mb-0 text-success"
                      v-if="price.total == price.final_total"
                      >TWD {{ price.final_total | currencyFilter }}</span
                    >
                    <span class="card-title mb-0 text-danger" v-else
                      >折扣價 {{ price.final_total | currencyFilter }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer間隔 -->
        <div class="m-5"></div>
        <!-- footer間隔 -->
      </section>
    </main>
    <Sub></Sub>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Sub from "../components/sub";
export default {
  data() {
    return {
      isLoading: false,
      Cart: [],
      price: {},
      //價錢變數
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  components: { Header, Footer, Sub },
  methods: {
    scroll() {
      window.scroll(0, 0);
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data.data.carts);
        vm.Cart = response.data.data.carts;
        vm.price = response.data.data;
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      this.$validator.validate().then(vaild => {
        if (vaild) {
          // 如果表單驗證成功才值型串接API送出訂單
          this.$http.post(api, { data: order }).then(response => {
            console.log(response);
            if (response.data.success) {
              vm.$router.push(`/reserveSuccess/${response.data.orderId}`);
            }
          });
        } else {
          console.log("驗證錯誤");
          alert("請填寫正確訊息!");
        }
      });
    }
  },

  computed: {
    totalPrice() {
      const vm = this;
      let total = 0;
      for (let i = 0; i < this.Cart.length; i++) {
        total += vm.Cart[i].total;
      }
      return total;
    }
  },

  created() {
    this.scroll();
    this.getCart();
  }
};
</script>

<style lang="scss" scope>
@media (max-width: 375px) {
  .BookingList {
    position: absolute;
    z-index: 2;
    width: 100%;
  }
}
</style>
