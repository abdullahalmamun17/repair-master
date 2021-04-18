import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import ProceedOrder from "./components/ProceedOrder/ProceedOrder";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/proceed-order/:serviceId'>
            <ProceedOrder></ProceedOrder>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
