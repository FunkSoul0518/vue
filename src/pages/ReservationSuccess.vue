<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Alert></Alert>
    <Header></Header>
    <main class="ReserveSuccess pt-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12 mt-5">
            <div class="d-md-flex mb-4 justify-content-between d-none ">
              <h5 class="text-secondary ">
                1.確認購買清單
              </h5>
              <h5 class="text-secondary ">
                2. 填寫訂單資料
              </h5>
              <h5 class="border-bottom border-dark pb-2">3. 完成訂單！</h5>
            </div>
            <h2 class="title pb-4 mb-4 border-bottom">訂單建立</h2>
            <ul class="pl-0 pb-4 border-bottom">
              <li class="row mb-3">
                <strong class="col-4 col-md-3">用戶姓名</strong>
                <span class="col-8 col-md-9 text-secondary">{{
                  order.user.name
                }}</span>
              </li>
              <li class="row mb-3">
                <strong class="col-4 col-md-3">電子信箱</strong>
                <span class="col-8 col-md-9 text-secondary">{{
                  order.user.email
                }}</span>
              </li>
              <li class="row ">
                <strong class="col-4 col-md-3">電話</strong>
                <span class="col-8 col-md-9 text-secondary">{{
                  order.user.tel
                }}</span>
              </li>
            </ul>
            <ul class="pl-0 pb-4 border-bottom">
              <li class="row">
                <strong class="col-md-3 col-4">備註</strong>
                <span class="col-8 col-md-9 text-secondary">{{
                  order.message
                }}</span>
              </li>
            </ul>
            <ul class="pl-0 pb-4 border-bottom">
              <li class="row mb-3">
                <strong class="col-md-3 col-4">入住日期</strong>
                <span class="col-8 col-md-9 text-secondary"
                  >Deluxe Suite with Pool / 2 nights</span
                >
              </li>
              <li class="row">
                <strong class="col-4 col-md-3">退房日期</strong>
                <span class="col-8 col-md-9 text-secondary"
                  >Friday, 19 June 2020</span
                >
              </li>
            </ul>
            <ul class="pl-0 pb-4 border-bottom mb-5">
              <li class="row">
                <strong class="col-md-3 col-4">總金額</strong>
                <span class="col-8 col-md-9 text-secondary"
                  >TWD{{ order.total | currencyFilter }}
                  <span class="text-success payState" v-if="payState"
                    >已付款</span
                  ></span
                >
              </li>
            </ul>

            <div class="d-flex flex-md-row flex-column">
              <router-link
                to="/"
                class="btn btn-outline-primary py-3 px-4 ml-md-auto mr-md-2 mb-2 mb-md-0"
                >首頁</router-link
              >
              <button
                href=""
                class="btn btn-primary py-3 px-4"
                @click.prevent="payOrder"
              >
                結帳
              </button>
            </div>
          </div>
        </div>

        <!-- footer間隔 -->
        <div class="m-5"></div>
        <!-- footer間隔 -->
      </div>
    </main>
    <Sub></Sub>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Sub from "../components/sub";
import Alert from "../components/AlertMsg";
import { eventBus } from "../main";

export default {
  data() {
    return {
      isLoading: false,
      orderId: "",
      //優惠碼變數
      order: {
        user: {}
      },
      //訂單API存放變數
      payState: false
      //付款狀態
    };
  },
  components: { Header, Footer, Sub, Alert },
  methods: {
    scroll() {
      window.scroll(0, 0);
    },
    getOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then(response => {
        console.log(response);
        vm.payState = response.data.success;
        vm.isLoading = false;
        eventBus.$emit("message:push", "結帳成功!", "success");
      });
    }
  },
  created() {
    this.scroll();
    this.orderId = this.$route.params.orderId;
    //路由語法 透過params取得路徑上的參數
    this.getOrder();
  }
};
</script>

<style lang="scss" scope>
// success
.payState {
  display: block;
}
// success
</style>
