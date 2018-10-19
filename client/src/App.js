import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import PhysicalStateCard from "./components/PhysicalStateCard";
import { BrowserRouter, Route, Switch} from 'react-router-dom';//Switch imported to deal with redirect at PrivateRoute
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Solid from './components/Solid';
import Liquid from './components/Liquid';
import Gaseous from './components/Gaseous';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import Profiles from './components/profiles/Profiles';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        
        
        <Route exact path='/' component={ PhysicalStateCard } />
        <Route exact path='/Solid' component ={Solid} />
        <Route exact path='/Liquid' component ={Liquid} />
        <Route exact path='/Gaseous' component ={Gaseous} />
        <Route exact path='/Landing' component ={Landing} />
        <div className="container">
          <Route exact path='/register' component={ Register} />
          <Route exact path='/login' component={ Login} />
              <Route exact path="/profiles" component={Profiles} />
          <Switch>
          <PrivateRoute exact path='/dashboard' component={ Dashboard} />
          </Switch>
          <Switch>
          <PrivateRoute exact path="/create-profile"
            component={CreateProfile}/>
          </Switch>
          <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
        </div>
        <Navbar />
      </div>
      </BrowserRouter>
      </Provider>
      
    );//return
  }//render
}//component

export default App;
