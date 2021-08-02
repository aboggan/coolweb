import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import { Login } from "../pages/Login";
import Main from "../pages/Main";

/*function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return sessionStorage.getItem("isLogged") === "true" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}*/

const routes = (
  <>
    <Route path="/" exact component={Main}></Route>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/dashboard" >
      <Dashboard />
    </Route>
  </>
);

export default routes;
