import { createStore } from "vuex"
import {
  getProductsUrl,
  refillProductUrl,
  buyProductUrl,
  reserveProductUrl,
  updateProductUrl,
} from "@/services/urls"
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
    setProductStock(state, product) {
      const item = state.products.findIndex((obj) => obj.id === product.id)
      state.products[item] = product
    },
  },
  actions: {
    getProducts({ commit }) {
      return axios.get(getProductsUrl()).then(({ data }) => {
        commit("setProducts", data)
      })
    },
    refillProduct({ commit }, payload) {
      return axios
        .put(refillProductUrl(payload.id, payload.amount))
        .then(({ data }) => {
          commit("setProductStock", data)
        })
    },
    buyProduct({ commit }, payload) {
      return axios
        .put(buyProductUrl(payload.id, payload.amount))
        .then(({ data }) => {
          commit("setProductStock", data)
        })
    },
    reserveProduct({ commit }, payload) {
      return axios
        .put(reserveProductUrl(payload.id, payload.amount))
        .then(({ data }) => {
          commit("setProductStock", data)
        })
    },
    updateProduct({ commit }, payload) {
      return axios.patch(updateProductUrl(), payload).then(({ data }) => {
        commit("setProductStock", data)
      })
    },
  },
  modules: {},
})
