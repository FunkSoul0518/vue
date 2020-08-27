<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item of orders"
          :key="item.id"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ item.create_at | date }}</td>
          <td>
            <span
              v-text="item.user.email"
              v-if="item.user"
            ></span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >
                {{ product.product.title }}
              </li>
            </ul>
          </td>
          <td class="text-left">{{ item.total | currencyFilter }}</td>
          <td>
            <span
              v-if="item.is_paid"
              class="text-success"
            >已付款</span>
            <span
              v-else
              class="text-danger"
            >尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Page
      :pages="pagination"
      @changePagnation="getOrders"
    ></Page>
  </div>
</template>

<script>
  import Page from "./Pagination";
  export default {
    data() {
      return {
        isLoading: false,
        orders: [],
        pagination: {},
      };
    },
    components: { Page },
    methods: {
      getOrders(currentPage = 1) {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${currentPage}`;
        vm.isLoading = true;
        this.$http.get(api).then((response) => {
          console.log(response);
          vm.isLoading = false;
          vm.orders = response.data.orders;
          vm.pagination = response.data.pagination;
        });
      },
    },
    created() {
      this.getOrders();
    },
  };
</script>
