import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import store from "./store"
import "./index.css"
import VueAxios from "vue-axios"

createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app")
