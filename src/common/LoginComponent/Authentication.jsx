import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "../navigation/routes.jsx";
import Login from "./Login";


const Authentication = () => {
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    // Simulated admin authentication function
    const authenticateAdmin = () => {
        // Implement your admin authentication logic here
        setIsAdminAuthenticated(true); // For demonstration purposes
    };

    return (
        <Router>
            <Switch>
                <Route
                    path="/login"
                    exact
                    render={(props) => (
                        <Login {...props} onAdminLogin={authenticateAdmin} />
                    )}
                />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) =>
                            route.requiresAdmin && !isAdminAuthenticated ? (
                                <Redirect to="/login" />
                            ) : (
                                <route.component {...props} />
                            )
                        }
                    />
                ))}
                <Redirect from="/" to="/home" />
            </Switch>
        </Router>
    );
}

export default Authentication;
