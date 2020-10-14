import React from 'react';
import './App.css';

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import LoadonTop from './components/LoadonTop';

import LoginPage from './components/LoginPage';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';

 const App=()=> {
  return (
    <React.Fragment>
         
        <Router>
          <ScrollToTop smooth color="#6f00ff"  style={{borderRadius:1000}} />
          <LoadonTop/>
          <Switch>
              <Route  path="/login" exact component={LoginPage} strict/>
              <PrivateRoute  path="/" exact  component={Home} strict/>
          </Switch>
        </Router> 
        
    </React.Fragment>
  );
}

export default App;
