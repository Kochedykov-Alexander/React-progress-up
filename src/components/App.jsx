import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from './auth/Login';
import Goal from './goal/Goal'
import CreateGoal from './goal/CreateGoal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import Registration from './registration/Registration'
import {auth} from '../actions/auth'
import { Redirect } from 'react-router'
import Subscriptions from './subscriptions/Subscriptions';
import Modal from './modal/Modal'
import Navbars from './navbar/Navbars';
import Menu from './navbar/Menu';
import Logout from './auth/Logout';




function App() {

  
  const isAuth = useSelector(state => state.user.isAuth)
  const currentUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  var items = null;
  
  if (isAuth) {
    items = [{href : "/user/" + currentUser.id, value: "Личный кабинет", icon: "login"}, {href : "/subscriptions", value: "Мои подписки", icon: "902"}, {href : "/logout", value: "Выйти", icon: 'app_registration'}]
  }
  else {
    items = [{href : "/login", value: "Логин", icon: "login"}, {href : "/registration", value: "Регистрация", icon: 'app_registration'}]
  }
  

  const [burgerActive, setBurgerActive] = useState(false);
  
  useEffect(() => {
    dispatch(auth())
  }, [])




  return (
    
    <BrowserRouter>
    <Navbars active={burgerActive} setActive={setBurgerActive}/>
    <Menu header="Progress Up" items={items} active={burgerActive} setActive={setBurgerActive}/>
    <div className="wrapper">
     
		    <div className="content">
        <div className="container">
       
{!isAuth &&
  
    <Switch>
       <Route exact path='/login' component={Login}></Route>
       <Redirect exact from='/' to="/login" />
    </Switch>
  }
 
   
<Switch>
<Route path='/logout' component={Logout}></Route>
<Route path='/goals/:id' component={Goal}></Route>
<Route exact path='/user/:user_id'  component={Profile}></Route>
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