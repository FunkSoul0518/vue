<template>
  <div>
    <Header></Header>
    <!-- search -->
    <div class="search-search bg-info mb-4">
      <div class="container">
        <div class="row ">
          <div class="col-12">
            <form method="POST" class="row p-0 justify-content-between p-md-3 ">
              <div class="dropdown col-md-3 col-12 p-0 ">
                <button
                  class="btn btn-light dropdown-toggle p-md-3 w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="d-flex align-items-center justify-content-center">
                    <font-awesome-icon
                      icon="map-marker-alt"
                      class="text-dark mr-lg-5 mr-md-3 d-none d-md-block"
                    />
                    <div class="text-left">
                      <p class="d-none d-md-block mb-0">Destination</p>
                      <p class="text-secondary mb-0">Bangkok</p>
                    </div>
                  </div>
                </button>
                <div
                  class="dropdown-menu  w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something </a>
                </div>
              </div>

              <!-- 1 -->
              <div class="dropdown col-md-3 col-12 p-0 ">
                <button
                  class="btn btn-light dropdown-toggle p-md-3 w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="d-flex align-items-center justify-content-center">
                    <font-awesome-icon
                      icon="calendar-alt"
                      class="text-dark mr-lg-5 mr-md-3 d-none d-md-block"
                    />
                    <div class="text-left">
                      <p class="d-none d-md-block mb-0">Check-in/out</p>
                      <p class="text-secondary mb-0">date</p>
                    </div>
                  </div>
                </button>
                <div
                  class="dropdown-menu  w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something </a>
                </div>
              </div>

              <!-- 2  -->

              <div class="dropdown col-md-3 col-12 p-0 ">
                <button
                  class="btn btn-light dropdown-toggle p-md-3 w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="d-flex align-items-center justify-content-center">
                    <font-awesome-icon
                      icon="male"
                      class="text-dark mr-lg-5 mr-md-3 d-none d-md-block"
                    />
                    <div class="text-left">
                      <p class="d-none d-md-block mb-0 text-md-center">
                        Guests
                      </p>
                      <p class="text-secondary mb-0">2 adults・1 room</p>
                    </div>
                  </div>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <!-- 1  -->
                  <div class="dropdown-item" href="#">
                    <div class="d-flex justify-content-between">
                      <p class="mb-0">Adult</p>
                      <div class="d-flex align-items-center ">
                        <a href="">
                          <font-awesome-icon icon="plus" class="text-dark" />
                        </a>
                        <span class="mx-3">2</span>
                        <a href="">
                          <font-awesome-icon icon="minus" class="text-dark" />
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
                          <font-awesome-icon icon="plus" class="text-dark" />
                        </a>
                        <span class="mx-3">0</span>
                        <a href="">
                          <font-awesome-icon icon="minus" class="text-dark" />
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
                          <font-awesome-icon icon="plus" class="text-dark" />
                        </a>
                        <span class="mx-3">1</span>
                        <a href="">
                          <font-awesome-icon icon="minus" class="text-dark" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 3  -->

              <div class="d-none d-md-block col-md-3 p-md-3">
                <a
                  href=""
                  class="btn btn-primary flex-md-grow-1 search_result w-100 "
                  >Search</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- search -->

    <!-- 篩選 -->
    <section class="filter">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 mb-md-4">
            <h2 class="title text-center text-md-left">
              Bangkok
              <sup class="text-primary">3,240</sup>
            </h2>
          </div>
          <!-- 篩選 / 排序條件 -->
          <div class="col-12 col-md-8 mb-2 mb-md-4">
            <!-- 手機篩選板塊  -->
            <div class="filter_condition d-flex d-md-none">
              <!-- filter 下方補彈出modal-->
              <button
                type="button"
                class="btn w-50"
                data-toggle="modal"
                data-target="#filterModal"
              >
                <font-awesome-icon icon="filter" class="mr-2" />
                條件
              </button>
              <!-- filter -->

              <!-- sort -->
              <div class="dropdown w-50">
                <button
                  class="btn  dropdown-toggle w-100"
                  type="button"
                  id="SortdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <font-awesome-icon icon="sort" class="mr-2" />
                  排序
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right p-0"
                  aria-labelledby="SortdownMenuButto"
                >
                  <a class="dropdown-item active" href="#">Recommended</a>
                  <a class="dropdown-item" href="#">Lowest Price</a>
                  <a class="dropdown-item" href="#">Best value</a>
                </div>
              </div>
              <!-- sort -->

              <!-- 手機篩選板塊  -->
            </div>
            <!-- 手機篩選板塊  -->

            <!-- 平板以上板塊  -->
            <ul class="nav d-none d-md-block d-md-flex">
              <li class="nav-item  mr-md-3 mr-lg-5">
                <a class="nav-link font-weight-bold" href="#">Recommended</a>
              </li>
              <li class="nav-item mr-md-3 mr-lg-5">
                <a class="nav-link text-dark" href="#">Lowest Price</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Best value</a>
              </li>
            </ul>
            <!-- 平板以上板塊  -->
          </div>

          <!-- 左側  -->
          <div class="col-md-4 d-none d-md-block">
            <div class="filter_left">
              <ul class="card card-body bg-info border-0">
                <li class="mb-4 pb-4 border-bottom">
                  <h3 class="title mb-3">Deals</h3>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="freeCancellation"
                    />
                    <label class="custom-control-label" for="freeCancellation"
                      >Free cancellation</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="noPrepayment"
                    />
                    <label class="custom-control-label" for="noPrepayment"
                      >No prepayment</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialOffers"
                    />
                    <label class="custom-control-label" for="specialOffers"
                      >Special offers</label
                    >
                  </div>
                </li>
                <!-- 2 -->
                <li class="mb-4 pb-4 border-bottom">
                  <h3 class="title mb-3">Popular filter</h3>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Breakfast included"
                    />
                    <label class="custom-control-label" for="Breakfast included"
                      >Breakfast included</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Free Wi-Fi"
                    />
                    <label class="custom-control-label" for="Free Wi-Fi"
                      >Free Wi-Fi</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Swimming pool"
                    />
                    <label class="custom-control-label" for="Swimming pool"
                      >Swimming pool</label
                    >
                  </div>
                </li>
                <!-- 3 -->
                <li class="mb-4 pb-4 border-bottom">
                  <h3 class="title mb-3">Budget(TWD)</h3>
                  <input
                    type="range"
                    class="form-control-range mb-3"
                    id="formControlRange"
                  />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="budget-item bg-light p-2  rounded">
                      <h5 class="mb-0 mr-3 mr-md-0">Min</h5>
                      <p class="text-secondary mb-0">800</p>
                    </div>
                    <span class="mx-3 font-weight-bold d-none d-md-block"
                      >-</span
                    >
                    <div class="budget-item bg-light p-2 rounded">
                      <h5 class="mb-0 mr-3 mr-md-0">Max</h5>
                      <p class="text-secondary mb-0">800</p>
                    </div>
                  </div>
                </li>
                <!-- 4 -->
                <li class="mb-4 pb-4 border-bottom">
                  <h3 class="title mb-3">Rating</h3>
                  <div
                    class="custom-control custom-checkbox mb-2 d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="fiveStar"
                    />
                    <label class="custom-control-label" for="fiveStar">
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <span>5.0</span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox mb-2 d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="fourStar"
                    />
                    <label class="custom-control-label" for="fourStar">
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />

                      <span>4.0</span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox mb-2 d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="threeStar"
                    />
                    <label class="custom-control-label" for="threeStar">
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />

                      <span>3.0</span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox mb-2 d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="twoStar"
                    />
                    <label class="custom-control-label" for="twoStar">
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />

                      <span>2.0</span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox mb-2 d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="oneStar"
                    />
                    <label class="custom-control-label" for="oneStar">
                      <font-awesome-icon icon="star" />

                      <span>1.0</span>
                    </label>
                  </div>
                </li>
                <!-- 5 -->
                <li>
                  <h3 class="title mb-3">Stay Type</h3>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Hotel"
                    />
                    <label class="custom-control-label" for="Hotel"
                      >Hotel</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Apartment"
                    />
                    <label class="custom-control-label" for="Apartment"
                      >Apartment</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Unique"
                    />
                    <label class="custom-control-label" for="Unique"
                      >Unique</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Hostel"
                    />
                    <label class="custom-control-label" for="Hostel"
                      >Hostel</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 左側  -->

          <!-- 右側 -->
          <div class="col-12 col-md-8 mb-4">
            <ul class="searchList mb-3 mb-md-5 mb-lg-7 p-0">
              <li class="pb-4 border-bottom">
                <div class="media h-100">
                  <img
                    src="../assets/hotel-1.jpg"
                    class="w-100 col-4 p-0 rounded"
                    alt=""
                  />
                  <div class="media-body px-2">
                    <div>
                      <a href=""
                        >Rachada, Bangkok
                        <span class="d-none d-lg-inline text-secondary"
                          >・2 km from center</span
                        >
                        <span
                          class="d-none d-md-inline text-dark ml-lg-5 ml-md-3"
                        >
                          <font-awesome-icon icon="star" />
                          <font-awesome-icon icon="star" />
                          <font-awesome-icon icon="star" />
                          <font-awesome-icon icon="star" />
                          4.0</span
                        ></a
                      >

                      <h5 class="title mb-lg-3 ">Rachada Hotel</h5>
                      <div
                        class="d-md-none d-flex mb-2 d-flex align-items-center"
                      >
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <span>4.0</span>
                      </div>
                      <p class="text-secondary mb-0">Deluxe Double Room</p>
                      <small class="text-secondary "
                        >2 guests・1 bed (Queen size)</small
                      >
                      <h3 class="text-right m-md-2 mt-4 m-lg-1">TWD 1,980</h3>
                      <div class="d-md-flex">
                        <!-- 篩選條件  -->
                        <div
                          class="bg-secondary text-light rounded-pill mt-lg-0 mt-md-2 p-1 text-center mr-lg-2 w-50 d-none d-md-block "
                        >
                          Free cancellation
                        </div>
                        <div
                          class="bg-secondary text-light rounded-pill mt-lg-0 mt-md-2 p-1 text-center w-50 d-none d-md-block"
                        >
                          No prepayment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 右側 -->

          <!-- 篩選 / 排序條件 -->
        </div>
      </div>
    </section>
    <!-- 篩選 -->

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
    return {};
  },
  components: { Header, Footer, Sub }
};
</script>

<style lang="scss" scope>
#dropdownMenuButton.btn::after,
#SortdownMenuButton::after {
  display: none;
}
// search

// left
@media (max-width: 769px) {
  .filter_left .title {
    font-size: 1rem;
  }

  .filter_left .budget-item > h5,
  p {
    font-size: 12px;
  }
}
// left

// right
.searchList .media > img {
  width: 100%;
  object-fit: cover;
  height: 190px;
}

// .searchList .card {
// }

// right
</style>
