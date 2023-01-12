<template>
  <div class="product-item">
    <div class="name">
      <b>Name: </b>
      <h5 class="mb-2 ml-2">{{ product.name }}</h5>
    </div>
    <div class="stock">
      <b>Stock: </b>
      <h5 class="ml-2">{{ product.stock }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    product: {
      handler(newVal) {
        console.log(newVal)
      },
      immediate: true,
    },
  },
}
</script>
