<template>
  <div>
    <!-- loading效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading效果 -->
    <Header></Header>
    <Alert></Alert>
    <TopBtn></TopBtn>
    <main class="RoomInfo pt-md-3 pt-lg-4">
      <div class="container">
        <!-- 第一塊是手機RWD輪播-->
        <div
          id="carouselRoomInfoControls"
          class="carousel slide d-md-none mb-3"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/info-1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/info-2.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselRoomInfoControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselRoomInfoControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- 第一塊是手機RWD輪播-->

        <!-- pad pc 版型 banner  -->
        <div class="d-none d-md-flex mb-4">
          <div class="col-7 p-0">
            <div class="leftRoom mr-md-1 mr-lg-2 ">
              <img :src="product.imageUrl" alt="" class="w-100 rounded" />
            </div>
          </div>
          <div class="col-5 p-0">
            <div class="rightRoom">
              <div class="rightTop mb-md-1 mb-lg-2">
                <img src="../assets/info-1.jpg" alt="" class="w-100 rounded" />
              </div>
              <div class="rightBottom d-flex ">
                <div class="mr-md-1 mr-lg-2 ">
                  <img
                    src="../assets/info-2.jpg"
                    alt=""
                    class="w-100 rounded  bottomLeft"
                  />
                </div>

                <div class="">
                  <img
                    src="../assets/info-3.jpg"
                    alt=""
                    class="bottomRight w-100 rounded mb-md-1 mb-lg-2 "
                  />

                  <button class="btn btn-dark w-100 bottomClick">
                    See All 10 photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- pad pc 版型 banner  -->

        <!-- 商品細節  -->
        <section class="RoomDetail">
          <div class="row">
            <div class="col-lg-7 col-md-9 col-12">
              <div
                class="d-flex flex-column flex-md-row align-items md-center mb-2 mb-md-0"
              >
                <div class="title mb-2 mb-md-0  d-flex  flex-column">
                  <h2 class="mb-3">
                    {{ product.title }}
                    <span class="text-danger ml-5">{{
                      product.price | currencyFilter
                    }}</span>
                  </h2>
                  <div class="input-group">
                    <select class="custom-select" v-model="product.num">
                      <option value="default" selected disabled required
                        >請選擇數量</option
                      >
                      <option :value="num" v-for="num in 5" :key="num"
                        >{{ num }} {{ product.unit }}</option
                      >
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        @click.prevent="AddCart(product.id, product.title)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p href="" class="text-primary text-decoration-none mt-3">
                {{ product.description }}
              </p>

              <p class="text-secondary mt-3 mt-md-4 mb-5 mb-lg-7">
                {{ product.content }}
              </p>

              <h2 class="title mb-md-4 mb-3">Select your room</h2>
            </div>

            <div class="d-none d-md-flex align-items-center px-3">
              <span class="bg-info text-secondary mr-2 px-3 py-2 rounded"
                >Bangkok, Thailand</span
              >
              <span class="bg-info text-secondary mr-2 px-3 py-2 rounded"
                >17 June - 19 June・2 nights</span
              >
              <span
                class="bg-info text-secondary mr-2 mr-md-4 px-3 py-2 rounded"
                >2 adults・1 room</span
              >
              <button
                class="btn btn-link px-0 font-weight-bold text-decoration-none"
              >
                EDIT DETAIL
              </button>
            </div>

            <!-- 商品選項手機板型 -->
            <div class="col-12 mb-5 mb-md-7 mt-md-5">
              <h3 class="title">其餘推薦</h3>
              <table class="table">
                <thead class="SelectListHead">
                  <tr class="d-none d-md-table-row ">
                    <th scope="col">Room Type</th>
                    <th scope="col">Sleeps</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="text-center">Rooms</th>
                  </tr>
                </thead>
                <tbody class="selectRoomBlock">
                  <tr v-for="item of randomProducts" :key="item.id">
                    <td>
                      <div class="card border-0">
                        <div class="d-flex align-items-center ">
                          <div class="selectRoomImg">
                            <img
                              :src="item.imageUrl"
                              alt=""
                              class="card-img rounded"
                            />
                          </div>
                          <div
                            class="selectRoomInfo card-body py-0 pr-0 px-2 pl-md-4"
                          >
                            <h5 href="#" class="card-title mb-1 d-flex">
                              {{ item.title }}
                            </h5>

                            <p class="text-secondary">1 bed (Queen size)</p>
                            <ul
                              class="selectCondition d-flex flex-wrap flex-lg-column pl-0"
                            >
                              <li class="icon mr-2 mr-lg-0 mb-lg-2">
                                <font-awesome-icon icon="wifi" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Wifi</span
                                >
                              </li>
                              <li class="icon mr-2 mr-lg-0 mb-lg-2">
                                <font-awesome-icon icon="tv" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Television</span
                                >
                              </li>
                              <li class="icon mr-2 mr-lg-0 mb-lg-2">
                                <font-awesome-icon icon="utensils" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Breakfast</span
                                >
                              </li>
                              <li class="icon mr-2 mr-lg-0 mb-lg-2">
                                <font-awesome-icon icon="wind" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Air conditioner</span
                                >
                              </li>
                              <li class="icon mr-2 mr-lg-0 mb-lg-2">
                                <font-awesome-icon icon="concierge-bell" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Room Service</span
                                >
                              </li>
                              <li class="icon mr-2 mr-lg-0">
                                <font-awesome-icon icon="smoking" />
                                <span class="text-secondary d-none d-lg-inline"
                                  >Smoke Free</span
                                >
                              </li>
                            </ul>
                            <div class="d-md-none">
                              <font-awesome-icon icon="male" />
                              <font-awesome-icon icon="male" />
                            </div>
                          </div>
                        </div>
                        <div
                          class="card_mobileSide bg-info d-flex align-items-center justify-content-between d-md-none rounded"
                        >
                          <div class="input-group">
                            <select
                              class="custom-select-sm mr-4 pr-1"
                              v-model="product.num"
                            >
                              <option value="default" selected disabled
                                >請選擇</option
                              >
                              <option :value="num" v-for="num in 5" :key="num"
                                >{{ num }} {{ product.unit }}</option
                              >
                            </select>
                            <div class="input-group-append">
                              <button
                                class="btn-sm btn-danger py-0"
                                type="button"
                                @click.prevent="AddCart(item.id, item.title)"
                              >
                                加入
                              </button>
                            </div>
                          </div>

                          <div class="text-right pr-2">
                            <del class="text-secondary">{{
                              item.origin_price | currencyFilter
                            }}</del>
                            <h5 class="mb-0 text-danger">
                              {{ item.price | currencyFilter }}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="border-0 align-middle d-none d-md-table-cell">
                      <font-awesome-icon icon="male" class="mx-2" />
                      <font-awesome-icon icon="male" />
                    </td>

                    <td class="border-0 align-middle d-none d-md-table-cell">
                      <del class="text-secondary">
                        {{ item.origin_price | currencyFilter }}</del
                      >
                      <p class="mb-0 text-danger">
                        {{ item.price | currencyFilter }}
                      </p>
                      <small class="text-secondary">per night</small>
                    </td>

                    <td class="border-0 align-middle d-none d-md-table-cell">
                      <div class="text-center">
                        <div class="input-group">
                          <select
                            class="custom-select btn-sm"
                            v-model="product.num"
                          >
                            <option value="default" selected disabled
                              >請選擇數量</option
                            >
                            <option :value="num" v-for="num in 5" :key="num"
                              >{{ num }} {{ product.unit }}</option
                            >
                          </select>
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-danger btn-sm"
                              type="button"
                              @click.prevent="AddCart(item.id, item.title)"
                            >
                              加入購物車
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 商品選項手機板型  -->
          </div>
        </section>
        <!-- 商品細節  -->
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
import { eventBus } from "../main";
import Alert from "../components/AlertMsg";
import TopBtn from "../components/TopBtn";

export default {
  data() {
    return {
      productId: "",
      product: {},
      isLoading: false,
      AllProducts: [],
      randomProducts: [],
      Carts: 0,
      CartsFilter: []
    };
  },
  components: { Header, Footer, Sub, Alert, TopBtn },
  methods: {
    scroll() {
      window.scroll(0, 0);
    },
    //跳轉頁面到這裡時回到最上
    toLink(id) {
      this.productId = id;
    },
    getProduct(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.product = response.data.product;
          vm.product.num = "default";
          //先設為預設，避免option的值跑掉
        }
      });
    },
    getAllProducts() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.AllProducts = response.data.products;
          this.random();
        }
      });
    },
    random() {
      let vm = this;
      let newArray = [...vm.AllProducts];
      if (newArray.length > 4) {
        for (let index = 0; index < 4; index++) {
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
        vm.Carts = response.data.data.carts.length;
        eventBus.$emit("CartNum", vm.Carts);
      });
    },
    //即時更新購物車數量給eventBus用
    AddCart(id, Addtitle, qty = 1) {
      //上方為API要求提供之參數 qty使用ES6語法預設為1 方便在直接加入購物車不查看更多選擇數量時使用
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.CartsFilter = response.data.data.carts;
        let title = vm.CartsFilter.find(item => {
          return item.product.title === Addtitle;
          //送出時先比對購物車內是否有相同的產品
        });

        if (title) {
          const deleteApi = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${title.id}`;
          this.$http.delete(deleteApi).then(response => {
            console.log(response);
          });
        }
        const CartInfo = { product_id: id, qty: vm.product.num };
        //把要post回後端的參數包成物件 qty不用給予值 因為function代入時已經預設為1
        if (vm.product.num == "default") {
          alert("請輸入數量!");
          vm.isLoading = false;
        } else {
          this.$http.post(api, { data: CartInfo }).then(response => {
            if (response.data.success) {
              vm.isLoading = false;
              eventBus.$emit("message:push", response.data.message, "success");
              vm.product.num = "default";
              //加入購物車後 讓選單回復預設值
              vm.getCart();
            }
          });
        }
      });
    }
  },
  created() {
    this.productId = this.$route.params.productId;
    this.scroll();
    this.getProduct(this.productId);
    this.getAllProducts();
    this.getCart();
  }
};
</script>

<style lang="scss" scope>
.card {
  background-color: transparent;
}
// roomInfo
.RoomInfo .slide img {
  height: 247px;
  object-fit: cover;
}

.leftRoom img {
  height: 434px;
}

.rightRoom .rightTop img,
.bottomLeft {
  height: 213px;
  object-fit: cover;
}

.bottomRight {
  height: 151px;
  object-fit: cover;
}

.bottomClick {
  height: 54px;
}

@media (max-width: 768px) {
  .leftRoom img {
    height: 268px;
  }

  .rightRoom .rightTop img,
  .bottomLeft {
    height: 132px;
  }

  .bottomRight {
    height: 93px;
  }

  .bottomClick {
    height: 34px;
    font-size: 13px;
  }
}

// roomInfo

//roomdetail
.SelectListHead tr th:nth-child(1) {
  width: 55%;
}

.selectCondition {
  width: 156px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .selectRoomImg {
    width: 150px;
    img {
      height: 150px;
    }
  }
  // .selectCondition {
  //   width: 132px;
  // }
  .selectRoomInfo {
    h5 {
      font-size: 16px;
    }
  }
}
@media (min-width: 992px) {
  .selectRoomImg {
    width: 255px;
    img {
      height: 175px;
      object-fit: cover;
      margin-bottom: 25px;
    }
  }

  .selectCondition {
    height: 116px;
    width: auto;
    .icon {
      width: 50%;
    }
  }
}
</style>
