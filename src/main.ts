import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Chart from 'primevue/chart'
import router from './router'

import './style.css'

const app = createApp(App);
app.use(PrimeVue);
app.component('Chart', Chart)
app.use(router)
app.mount('#app');
