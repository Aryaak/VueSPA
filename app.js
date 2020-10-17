import HeaderComponent from "./component/header-component.js";
import FooterComponent from "./component/footer-component.js";
import router from "./router.js";


const app = new Vue({
    el: "#app",
    router,
    components: {
        "header-component": HeaderComponent,
        "footer-component": FooterComponent,
        
    }
})