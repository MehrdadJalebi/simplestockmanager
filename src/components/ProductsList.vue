<template>
  <div class="products-list">inja</div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
