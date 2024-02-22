import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

let apps = createApp(App)

apps.use(VueAwesomePaginate)
apps.mount('#app')



