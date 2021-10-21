import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaVuejs } from "oh-vue-icons/icons";

addIcons(FaVuejs);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
