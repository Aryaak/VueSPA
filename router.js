import HomeComponent from "./component/home-component.js";
import NewsComponent from "./component/news-component";
import ProductsComponent from "./component/products-component.js";
import AboutComponent from "./component/about-component.js";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/news", component: NewsComponent },
    { path: "/products", component: ProductsComponent },
    { path: "/about", component: AboutComponent }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router;