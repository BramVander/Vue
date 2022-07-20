import { createRouter, createWebHistory } from "vue-router";
import VacationPicker from "../components/VacationPicker.vue";
import CountryDetail from "../components/CountryDetail.vue";
import AddCountry from "../components/AddCountry.vue";
import UpdateCountry from "../components/UpdateCountry.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: VacationPicker,
  },
  {
    path: "/detail/:id/:name",
    name: "detail",
    component: CountryDetail,
  },
  {
    path: "/update",
    name: "update",
    component: UpdateCountry,
  },
  {
    path: "/add",
    name: "add",
    component: AddCountry,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
