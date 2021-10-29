import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="h4 text-center my-5 fw-bold text-orange">
                Loading data from server please wait
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}
                    ></Redirect>
                )
            }
        ></Route>
    );
};

export default PrivateRoute;
