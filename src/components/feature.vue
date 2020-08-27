<template>
  <div data-aos="zoom-in" data-aos-duration="1200">
    <section class="feature p-5">
      <div class="container text-center  ">
        <h2 class="title mt-4 p-2 ">Start Travel</h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mt-5 flex-wrap"
        >
          <div class="card border-0 mb-5 mb-lg-0 ">
            <img
              src="../assets/feature1.jpg"
              class="card-img-top img-cover rounded-circle mb-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-text">
                用最快的速度找到屬於你的旅舍
              </h5>
            </div>
          </div>

          <div class="card border-0 mb-5 mb-lg-0 ">
            <img
              src="../assets/feature2.jpg"
              class="card-img-top img-cover rounded-circle mb-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-text">
                享有最優惠的價格，以及屬於自己的折扣
              </h5>
            </div>
          </div>
          <div class="card border-0 mb-5 mb-lg-0 ">
            <img
              src="../assets/feature3.jpg"
              class="card-img-top img-cover rounded-circle mb-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-text">
                依照個人的喜好，提供適合你的選擇
              </h5>
            </div>
          </div>
          <div class="card border-0 mb-5 mb-lg-0">
            <img
              src="../assets/feature4.jpg"
              class="card-img-top img-cover rounded-circle mb-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-text">
                放鬆身心，享受屬於你的時刻
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scope>
.feature {
  .card {
    background-color: transparent;
    width: 20%;
  }
  img {
    height: 222px;
  }
  h5 {
    line-height: 1.5;
  }
}

@media (max-width: 768px) {
  .feature {
    .card {
      width: 45%;
    }
    img {
      height: 289px;
    }
  }
}

@media (max-width: 375px) {
  .feature {
    .card {
      width: 100%;
    }
    img {
      height: 250px;
    }
  }
}
</style>
