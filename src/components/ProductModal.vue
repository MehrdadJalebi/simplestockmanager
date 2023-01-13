<template>
  <div class="modal" v-if="isShowModal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <div class="flex flex-column items-center justify-center">
        <input type="text" v-model="name" placeholder="Name" />
        <input class="ml-2" type="text" v-model="stock" placeholder="Stock" />
        <button class="secondary" @click="update">update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "ProductModal",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    isShowModal: Boolean,
  },
  data() {
    return {
      name: "",
      stock: "",
    }
  },
  computed: {
    productPayload() {
      return {
        id: this.product.id,
        name: this.name,
        stock: this.stock,
      }
    },
  },
  methods: {
    ...mapActions({
      updateProduct: "updateProduct",
    }),
    close() {
      this.$emit("close")
    },
    update() {
      this.updateProduct(this.productPayload).then(() => {
        this.close()
      })
    },
  },
}
</script>
