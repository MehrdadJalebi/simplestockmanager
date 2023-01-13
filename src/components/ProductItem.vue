<template>
  <div class="product-item">
    <div class="name">
      <b>Name: </b>
      <h5 class="ml-2">{{ product.name }}</h5>
    </div>
    <div class="stock mt-2">
      <b>Stock: </b>
      <h5 class="ml-2">{{ product.stock }}</h5>
    </div>
    <div class="amount mt-2">
      <b>Amount: </b>
      <input class="ml-2" type="text" v-model="amount" />
    </div>
    <div class="actions mt-3">
      <button class="secondary-outline" @click="update">update</button>
      <button class="secondary-outline" @click="refill">refill</button>
      <button class="primary-outline" @click="reserve">reserve</button>
      <button class="success" @click="buy">buy</button>
    </div>
    <product-modal
      :is-show-modal="isShow"
      :product="product"
      @close="isShow = false"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex"
import ProductModal from "@/components/ProductModal.vue"
export default {
  name: "ProductItem",
  components: {
    ProductModal,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      amount: 0,
      isShow: false,
    }
  },
  computed: {
    amountPayload() {
      return {
        id: this.product.id,
        amount: parseInt(this.amount),
      }
    },
  },
  methods: {
    ...mapActions({
      refillProduct: "refillProduct",
      buyProduct: "buyProduct",
      reserveProduct: "reserveProduct",
      updateProduct: "updateProduct",
    }),
    buy() {
      this.buyProduct(this.amountPayload)
    },
    refill() {
      this.refillProduct(this.amountPayload)
    },
    reserve() {
      this.reserveProduct(this.amountPayload)
    },
    update() {
      this.isShow = true
    },
  },
}
</script>
