<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="item in swiper"
        :key="item.id"
        class="coupon-swiper-slide text-center"
      >
        <div class="card border-0">
          <div
            class="card-info-img position-relative bg-cover rounded mb-3"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          >
            <a
              href=""
              class="position-absolute img-cover"
              @click.prevent="toDetail(item.id)"
            >
              <p>查看更多</p>
            </a>
          </div>
        </div>
        <strong>{{ item.title }}</strong>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "carrousel",
  props: ["swiper"],
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        speed: 800,
        autoplay: true,
        loop: true, // 開啟迴圈模式,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          // 當寬度小於等於 544
          544: {
            slidesPerView: 1
          },
          // 當寬度小於等於 767
          767: {
            slidesPerView: 2,
            centeredSlides: false
          },
          // 當寬度小於等於 991
          991: {
            slidesPerView: 3,
            centeredSlides: true
          }
        }
      }
      // randomProducts: []
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    toDetail(id) {
      this.$emit("toDetail", id);
      //打事件回product父層 回傳item(分頁)參數
    }
  }
};
</script>

<style scoped lang="scss">
.coupon-swiper-slide {
  transition: 300ms;
}
.coupon-swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
.swiper-container {
  height: 256px;
  //要設定高度 不然分頁會跟圖片重疊
}
</style>
