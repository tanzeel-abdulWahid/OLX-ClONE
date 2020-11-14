import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Headertwo from './Headertwo';
import Ads from './Ads';
import Homepage from './Homepage';
import Footer from './Foooter';
import Login from './Login';
import Sell from "./Sell"
import { auth } from './firebase';
import {useStateValue} from './StateProvider';

function App() {


  const [{sell}, dispatch] = useStateValue();

  //useeffect
  //runs on given condition
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser)=> {
    if (authUser){
      //the user is logged in
      dispatch({
        type: "SET_USER",
        user : authUser ,
      })
    } else{
      //the user is logged out
      dispatch({
        type: "SET_USER",
        user : null ,
      })
    }
  });
    return () =>{
      //any clean uu operations go in here
      unsubscribe();
    }
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
              <Header />
              <Headertwo />
              <Ads />
              <Homepage />
              <Footer />
          </Route>

          <Route path='/login'>
              <Login />
          </Route>

          <Route path="/sell">
              <Sell />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
