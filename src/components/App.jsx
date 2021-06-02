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
import Navbar from './navbar/Navbar';
import Menu from './navbar/Menu';
import Logout from './auth/Logout';
import Search from './Search/Search'







function App() {

  
  const isAuth = useSelector(state => state.user.isAuth)
  const currentUser = useSelector(state => state.user.currentUser)
  var items = null;
  const dispatch = useDispatch()
  
  
  
  
  
  
  useEffect(() => {
    dispatch(auth())
   

  },[isAuth])
  const [burgerActive, setBurgerActive] = useState(false);
  if (isAuth) {
    items = [{href : "/user/" + currentUser.id, value: "Личный кабинет", icon: "login"}, {href : "/subscriptions", value: "Мои подписки", icon: "902"}, {href : "/search", value: "Поиск", icon: "search"}, {href : "/logout", value: "Выйти", icon: 'app_registration'}]
    
  }
  else {
    items = [{href : "/login", value: "Логин", icon: "login"}, {href : "/registration", value: "Регистрация", icon: 'app_registration'}]
  }

  return (

  
    
    <BrowserRouter>
    <Navbar active={burgerActive} setActive={setBurgerActive}/>
    <Menu header="Progress Up" items={items} active={burgerActive} setActive={setBurgerActive}/>
    <div className="wrapper">
     
		    <div className="content">
        <div className="container">
       
{!isAuth &&
  
    <Switch>
       <Route exact path='/login' component={Login}></Route>
       <Route exact path='/registration' component={Registration}></Route>
       <Redirect exact from='/' to="/login" />
       <Redirect exact from='/logout' to="/login" />
    </Switch>
  }

  {isAuth &&
  <Switch>
    <Redirect to={"/user/" + currentUser.id} from="/login"></Redirect>
  </Switch>
  }

<Switch>
  <Route path='/logout' component={Logout}></Route>
  <Route path='/search' component={Search}></Route>
  <Route path='/goals/:id' component={Goal}></Route>
  <Route exact path='/user/:user_id'  component={Profile}></Route>
  <Route exact path='/subscriptions'  component={Subscriptions}></Route>
  <Route exact path='/users/edit/:id'><Profile_edit user={currentUser}/></Route>

</Switch>

    </div>
      </div>
        </div>
    </BrowserRouter>
   
  );
}

export default App;