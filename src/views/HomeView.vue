<template>
  <div class="home">
    <products-list :products="products" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ProductsList from "@/components/ProductsList.vue"

export default {
  name: "HomeView",
  components: {
    ProductsList,
  },
  computed: {
    ...mapGetters({
      products: "products",
    }),
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
    }),
  },
}
</script>
