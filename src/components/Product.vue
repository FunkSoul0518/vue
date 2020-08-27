<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Alert></Alert>

    <div class="text-right mt-4">
      <button class="btn btn-primary" @click.prevent="openModal(true)">
        建立新的產品
      </button>
      <!-- 改用事件寫法不用data-toogle可以決定視窗彈出的時間跟條件 -->
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-left">
            {{ item.origin_price }}
          </td>
          <td class="text-left">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <div>
              <button
                class="btn btn-outline-primary btn-sm"
                @click.prevent="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click.prevent="deleteModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分頁組件 -->
    <Paginate :pages="Pagination" @changePagnation="getProduct"></Paginate>
    <!-- 分頁組件 -->

    <!-- openModal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <font-awesome-icon icon="upload" />
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>

                <img :src="tempProduct.imageUrl" class="img-fluid" alt="" />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />

                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- deleteModal -->
    <div
      class="modal fade"
      id="deleteModal"
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">刪除產品</h5>
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
            你確定要刪除此筆產品資料嗎?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="deleteProduct"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Paginate from "./Pagination";
import Alert from "../components/AlertMsg";
import { eventBus } from "../main";
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      //要編輯修改時放置的產品變數
      isNew: false,
      //確認是新增還是編輯
      isLoading: false,
      Pagination: {}
      //分頁數量變數
    };
  },
  components: { Paginate, Alert },
  methods: {
    getProduct(page = 1) {
      //ES6寫法 讓預測參數為1
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
        vm.isLoading = false;
        //要重新改回false 不然會一直轉圈
        vm.Pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        //因為物件傳參考的特性 避免資料互相影響 所以把需要編輯的品項 複製到一個新物件內更改
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      //因為要分辨是新增還是編輯 API路徑會不一樣 所以改用let 避免無法修改
      vm.isLoading = true;
      if (vm.isNew) {
        this.$http.post(api, { data: vm.tempProduct }).then(response => {
          //因為是POST 並且有參數要回傳 然後文件是物件包DATA 內部才是物件參數 所以上方要用物件包起來
          console.log(response.data);
          // vm.isLoading = false;
          if (response.data.success) {
            $("#productModal").modal("hide");
            vm.getProduct();
          } else {
            $("#productModal").modal("hide");
            vm.getProduct();
            alert("新增失敗!");
          }
          eventBus.$emit("message:push", response.data.message, "success");
        });
      }
      // 如果是新增打上方API
      else {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        this.$http.put(api, { data: vm.tempProduct }).then(response => {
          if (response.data.success) {
            $("#productModal").modal("hide");

            vm.getProduct();
          } else {
            $("#productModal").modal("hide");
            vm.getProduct();
            alert("修改失敗!");
          }
          eventBus.$emit("message:push", response.data.message, "success");
        });
      }
    },
    deleteModal(item) {
      this.tempProduct = item;
      $("#deleteModal").modal("show");
    },
    deleteProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          $("#deleteModal").modal("hide");
          vm.getProduct();
          this.$bus.$emit("message:push", "加入成功", "success");
        } else {
          $("#deleteModal").modal("hide");
          vm.getProduct();
          alert("刪除失敗!");
        }
      });
    },
    uploadFile() {
      const vm = this;
      const uploaded = this.$refs.files.files[0];
      const id = this.$refs.files.id;
      //設置ID變數 在上傳成功之後可以抓取DOM 清空欄位
      const formData = new FormData();
      formData.append("file-to-upload", uploaded);
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      this.$http
        .post(url, formData, {
          formType: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          console.log(response.data);
          if (response.data.success) {
            //IMG因為跟title unit其他東西不一樣可以直接v-model綁定 所以要用set強制寫入 不然console上看不到
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
            document.getElementById(id).value = "";
            console.log(vm.tempProduct);
            //確認有無成功寫入
          } else {
            eventBus.$emit("message:push", response.data.message, "danger");
          }
        });
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style lang="scss" scope></style>
