import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
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
        </Router>
    );
}

export default App;
