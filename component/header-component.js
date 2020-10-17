const HeaderComponent = {
    template: `<header>
            <div class="logo">
                <h1>Vue SPA</h1>
            </div>
            <nav class="menu">
                <router-link to="/">Home</router-link>
                <router-link to="/products">Products</router-link>
                <router-link to="/about">About</router-link>
            </nav>
            <div class="submit">
                <button class="login">Login</button>
                <button class="register">Register</button>
            </div>
            </header>`
}