<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: !pages.has_pre }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="changePage(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="item of pages.total_pages"
          :key="item"
          :class="{ active: pages.current_page === item }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(item)"
          >{{
            item
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !pages.has_next }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="changePage(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["pages"],
    methods: {
      changePage(item) {
        this.$emit("changePagnation", item);
        //打事件回product父層 回傳item(分頁)參數
      },
    },
  };
</script>
