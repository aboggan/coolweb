import React from "react";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Home/Blog";
import SignInSide from "./components/SignInSide";
import TableDemo from "./components/TableDemo";

function App() {
  
  //const classes = useStyles();





  function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={( { location } ) => {
        return sessionStorage.getItem("isLogged") === "true" 
          ? children
          : <Redirect to={{
            pathname: '/login',
            state: {from: location}
          }} />
      }} />
    )
  }


  return (
    <Router>
      <main>
        <Route path="/" exact component={Blog}></Route>
        <Route path="/login">
          <SignInSide />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/tabla">
          <TableDemo />
        </PrivateRoute>
        
      </main>
    </Router>
  );
}

export default App;
