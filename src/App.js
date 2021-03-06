import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Order from "./pages/Order";
import User from "./pages/User";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorite from "./pages/Favorite";
import NotFound from "./components/NotFound";
import MapPage from "./pages/MapPage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product/:drugSlug">
                    <Product />
                </Route>
                <Route path="/catalog/:catalog" component={Catalog} />
                <Route path="/auth">
                    <Auth />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/cart">
                    <Basket />
                </Route>
                <Route path="/orders">
                    <Order />
                </Route>
                <Route path="/favorite">
                    <Favorite />
                </Route>
                <Route path="/map/:map" component={MapPage} />
                <Route path="/404">
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
