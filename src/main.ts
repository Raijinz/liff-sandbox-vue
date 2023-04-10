import { createApp } from "vue";
import { createPinia } from "pinia";
import VConsole from "vconsole";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
new VConsole();

app.use(createPinia());
app.use(router);

app.mount("#app");
