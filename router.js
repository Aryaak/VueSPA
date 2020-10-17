const routes = [
    { path: "/", component: HomeComponent },
    { path: "/products", component: ProductsComponent },
    { path: "/about", component: AboutComponent }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})