<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Header></Header>
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h2 class="title my-4 text-center">訂單查詢</h2>
          <table class="table mb-5">
            <thead class="thead-dark">
              <tr class="text-center">
                <th>預約時間</th>
                <th>姓名</th>
                <th width="300px">訂單編號</th>
                <th>應付金額</th>
                <th>是否付款</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-center"
                v-for="item of orders"
                :key="item.id"
              >
                <th scope="row">{{item.create_at | date}}</th>
                <td>{{item.user.name}}</td>
                <td><a
                    class="btn text-primary"
                    @click.prevent="toLink(item.id)"
                  >{{item.id}}</a></td>
                <td>{{item.total | currencyFilter}}</td>
                <td class="font-weight-bold">
                  <span
                    class="text-danger"
                    v-if="!item.is_paid"
                  >尚未付款</span>
                  <span
                    class="text-success"
                    v-else
                  >已付款</span>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 分頁組件 -->
          <Page
            class="mb-5"
            :pages="pagination"
            @changePagnation="getOrders"
          ></Page>
          <!-- 分頁組件 -->

        </div>
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
  import Page from "../components/Pagination";
  export default {
    data() {
      return {
        isLoading: false,
        pagination: [],
        orders: [],
        tempOrder: {},
        // date: new Date(),
      };
    },
    components: { Header, Footer, Sub, Page },
    methods: {
      toLink(id) {
        this.$router.push(`/reserveSuccess/${id}`);
      },
      getOrders(page = 1) {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`;
        vm.isLoading = true;
        this.$http.get(api).then((response) => {
          console.log(response.data);
          vm.isLoading = false;
          if (response.data.success) {
            vm.orders = response.data.orders;
            vm.pagination = response.data.pagination;
          }
        });
      },
    },
    created() {
      this.getOrders();
    },
  };
</script>