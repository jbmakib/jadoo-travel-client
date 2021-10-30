import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import BookService from "./Pages/BookService/BookService";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import MyOrders from "./Pages/MyOrders/MyOrders/MyOrders";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";

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
                    <PrivateRoute path="/my-orders">
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path="/add-service">
                        <AddService></AddService>
                    </PrivateRoute>
                    <PrivateRoute path="/book-service/:serviceId">
                        <BookService></BookService>
                    </PrivateRoute>
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
