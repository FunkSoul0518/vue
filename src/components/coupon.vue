<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Alert></Alert>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">
        新增優惠碼
      </button>
      <!-- 改用事件寫法不用data-toogle可以決定視窗彈出的時間跟條件 -->
    </div>

    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click.prevent="delModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- //分頁組件 -->
    <Page :pages="pagination" @changePagnation="getCoupons"></Page>
    <!-- //分頁組件 -->

    <!-- 新增與編輯視窗Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">編輯</h5>
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
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
                v-validate="'required'"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
                v-validate="'required'"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="tempCoupon.due_date"
                v-validate="'required'"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
                v-validate="'required'"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              更新優惠券
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
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
            是否刪除
            <strong class="text-danger">{{ tempCoupon.code }}</strong>
            優惠碼(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Page from "./Pagination";
import Alert from "../components/AlertMsg";
import { eventBus } from "../main";
export default {
  data() {
    return {
      isLoading: false,
      coupons: [],
      // 存放優惠券的列表資訊
      tempCoupon: {
        title: "",
        is_enabled: 1,
        percent: 100,
        due_date: 0,
        code: ""
      },
      //暫存優惠碼資訊方便新增/編輯
      due_date: new Date(),
      // 建立新日期物件後，給due_date()使用的變數
      isNew: false,
      // 用來判斷新增資料或是編輯資料使用
      pagination: []
      // 打資料給page元件
    };
  },
  components: { Page, Alert },
  watch: {
    //為vm.tempCoupon.due_date持續更新時間 可以即時POST unix格式不用寫在下面
    dueDate() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      // 時間有變動，會一直回傳資料
      vm.tempCoupon.due_date = timestamp;
      console.log(vm.tempCoupon.due_date);
    }
  },
  methods: {
    getCoupons(page = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openCouponModal(isNew, item) {
      $("#couponModal").modal("show");
      const vm = this;
      if (isNew) {
        vm.tempCoupon = {};
        vm.isNew = true;
        //假設是從新增按鈕觸發事件則代入true變數，則判斷為新增事件
      } else {
        vm.tempCoupon = Object.assign({}, item);
        //因為物件傳參考的特性 避免資料互相影響 所以把需要編輯的品項 複製到一個新物件內更改
        vm.isNew = false;
      }
    },
    updateCoupon() {
      const vm = this;
      vm.isLoading = true;
      if (vm.isNew) {
        //假設判斷是新增
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
        this.$http.post(url, { data: vm.tempCoupon }).then(response => {
          console.log(response);
          vm.isLoading = false;
        });
        $("#couponModal").modal("hide");
        this.getCoupons();
        eventBus.$emit("message:push", response.data.message, "success");
      } else {
        // 更新要傳入優惠券項目ID
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        // 更新使用put方法
        this.$http.put(url, { data: vm.tempCoupon }).then(response => {
          console.log(response);
          vm.isLoading = false;
          $("#couponModal").modal("hide");
          this.getCoupons();
          eventBus.$emit("message:push", response.data.message, "success");
        });
      }
      this.getCoupons();
    },
    delModal(item) {
      this.tempCoupon = item;
      $("#deleteModal").modal("show");
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        console.log(response);
        vm.isLoading = false;
        if (response.data.success) {
          $("#deleteModal").modal("hide");
          vm.getCoupons();
          eventBus.$emit("message:push", response.data.message, "success");
        } else {
          $("#deleteModal").modal("hide");
          vm.getCoupons();
          eventBus.$emit("message:push", response.data.message, "danger");
        }
      });
    }
  },
  created() {
    this.getCoupons();
  }
};
</script>
