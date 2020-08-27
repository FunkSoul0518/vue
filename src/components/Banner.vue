<template>
  <div>
    <main class="banner">
      <p class="carousel-title ">
        Discover your ideal hotel
      </p>
      <div
        id="carouselExampleControls"
        class="carousel slide banner"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/banner.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/banner2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/banner3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scope>
.banner {
  position: relative;
  img {
    object-fit: cover;
    height: 320px;
  }
}
.carousel-title {
  text-align: center;
  color: #fff;
  font-size: 3rem;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 1;
}

@media (max-width: 375px) {
  .carousel-title {
    font-size: 1.5rem;
    top: 44%;
  }
}
</style>
