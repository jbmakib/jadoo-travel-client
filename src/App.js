import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <h2>Page not found</h2>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    );
}

export default App;
