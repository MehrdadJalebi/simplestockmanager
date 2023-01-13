const apiUrl = "https://stockmanager.mooo.com/api"

export const getProductsUrl = () => `${apiUrl}/products`
export const updateProductUrl = () => `${apiUrl}/products/update`
export const getProductUrl = (id) => `${apiUrl}/products/${id}`
export const getProductStockUrl = (id) => `${apiUrl}/products/${id}/stock`
export const reserveProductUrl = (id, amount) =>
  `${apiUrl}/products/${id}/reserve?amount=${amount}`
export const refillProductUrl = (id, amount) =>
  `${apiUrl}/products/${id}/refill?amount=${amount}`
export const buyProductUrl = (id, amount) =>
  `${apiUrl}/products/${id}/buy?amount=${amount}`
