<template>
  <div class="products-list">
    <product-item
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue"
export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    products: {
      handler(newVal) {
        console.log(newVal)
      },
      immediate: true,
    },
  },
}
</script>
