import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Login from './auth/Login';
import Goal from './goal/Goal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../reducers/tokenReducer';
import React, {useEffect} from 'react';



function App() {

  const isAuth = useSelector(state => state.token.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(logout)
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
          </Switch>
        }
    <Switch>
      <Route path='/goals/:id' component={Goal}></Route>
      <Route path='/users/:user_id' exact component={Profile}></Route>
      <Route path='/users/edit/:id' exact component={Profile_edit}></Route>
   </Switch>
    </div>
      </div>
        </div>
    </BrowserRouter>
   
  );
}

export default App;
