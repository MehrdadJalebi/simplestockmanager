import { createStore } from "vuex"
import { getProductsUrl } from "@/services/urls"
import axios from "axios"

export default createStore({
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products
    },
  },
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts
    },
  },
  actions: {
    getProducts({ commit }) {
      return axios.get(getProductsUrl()).then(({ data }) => {
        commit("setProducts", data)
      })
    },
  },
  modules: {},
})
