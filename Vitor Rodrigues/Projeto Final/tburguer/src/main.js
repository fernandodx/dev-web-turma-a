import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

<<<<<<< HEAD
const app = createApp(App);

//Aqui criamos uma variável Global chamada apiUrl
app.config.globalProperties.$apiUrl = process.env.VUE_APP_API_BASE_URL;

app.use(router).mount("#app");
=======
const app =createApp(App);

//aqui criamos uma variável Global chamada apiUrl
app.config.globalProperties.$apiUrl = process.env.VUE_APP_API_BASE_URL;

app.use(router).mount('#app')
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
