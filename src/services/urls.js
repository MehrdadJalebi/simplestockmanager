const apiUrl = "https://stockmanager.mooo.com/api"

export const getProductsUrl = () => `${apiUrl}/products`
export const updateProductsUrl = () => `${apiUrl}/products/update`
export const getProductUrl = (id) => `${apiUrl}/products/${id}`
export const getProductStockUrl = (id) => `${apiUrl}/products/${id}/stock`
export const reserveProductUrl = (id) => `${apiUrl}/products/${id}/reserve`
export const refillProductUrl = (id) => `${apiUrl}/products/${id}/refill`
export const buyProductUrl = (id) => `${apiUrl}/products/${id}/buy`
