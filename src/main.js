import { createApp } from 'vue';
import router from "./router";
import App from './App.vue';
import {createPinia} from "pinia";

import "ayoflex/dist/ayoflex.min.css";
import './assets/css/example.css';


const app = createApp(App);
app.use(router);

const pinia = createPinia();
app.use(pinia);
// app.config.globalProperties.$eventBus =  eventBus;

app.mount('#app');

