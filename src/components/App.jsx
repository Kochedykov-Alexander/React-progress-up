import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Login from './auth/Login';
import Goal from './goal/Goal'
import CreateGoal from './goal/CreateGoal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../reducers/tokenReducer';
import React, {useEffect, useState} from 'react';
import Registration from './registration/Registration'
import {auth} from '../actions/auth'
import { Redirect } from 'react-router'
import Subscriptions from './subscriptions/Subscriptions';
import Modal from './modal/Modal'




function App() {

  
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
}, [])


  


  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className="wrapper">
      <div className="container">
		    <div className="content">
        {!isAuth &&
          <Switch>
             <Route exact path='/login' component={Login}></Route>
             <Redirect exact from='/' to="/login" />
          </Switch>
        }
       
         
    <Switch>
      <Route path='/goals/:id' component={Goal}></Route>
      <Route exact path='/users/:user_id'  component={Profile}></Route>
      <Route exact path='/subscriptions'  component={Subscriptions}></Route>
      <Route exact path='/users/edit/:id' component={Profile_edit}></Route>
   </Switch>

    </div>
      </div>
        </div>
    </BrowserRouter>
   
  );
}

export default App;