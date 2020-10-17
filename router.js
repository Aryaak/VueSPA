import HomeComponent from "./component/home-component.js";
import ProductsComponent from "./component/products-component.js";
import AboutComponent from "./component/about-component.js";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/products", component: ProductsComponent },
    { path: "/about", component: AboutComponent }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router;