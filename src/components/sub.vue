<template>
  <div>
    <section class="subscribe mb-3">
      <div class="jumbotron jumbotron-fluid mb-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="mb-3 mb-md-4 display-lg-3 text-center text-light">
                Subscribe for Exclusive Offer
              </h2>
            </div>

            <div class="col-12 col-md-10 col-lg-6 offset-lg-3 offset-md-1">
              <form method="POST" class="position-relative">
                <input
                  type="email"
                  name="mail"
                  class="form-group py-3 pl-3 border-0 rounded d-block w-100"
                  placeholder="Your email address"
                />
                <button
                  class="btn btn-primary position-absolute py-3 font-weight-bold"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scope>
// subscribe
.jumbotron {
  background-color: #2d2d34;
}
.subscribe button {
  top: 0;
  right: 0;
}
// subscribe
</style>
