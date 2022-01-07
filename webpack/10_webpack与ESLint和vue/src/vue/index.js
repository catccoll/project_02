import vue from "vue";
import Index from "./index.vue";
new vue({
  render: (h) => h(Index),
}).$mount("#app");
