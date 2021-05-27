import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Login from './auth/Login';
import Goal from './goal/Goal'
import CreateGoal from './goal/CreateGoal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'
<<<<<<< HEAD
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../reducers/tokenReducer';
import React, {useEffect} from 'react';

=======
import Registration from './registration/Registration'
import {useSelector} from 'react-redux'
>>>>>>> cc5070eeebf2dcb358f6529dd926c3901167ab49


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
<<<<<<< HEAD
             <Route exact path='/login' component={Login}></Route>
          </Switch>
        }
    <Switch>
      <Route path='/goals/:id' component={Goal}></Route>
      <Route path='/users/:user_id' exact component={Profile}></Route>
      <Route path='/users/edit/:id' exact component={Profile_edit}></Route>
=======
          <Route path='/registration' component={Registration}></Route>  
          <Route path='/login' component={Login}></Route>
          </Switch>
        }
    <Switch>
      <Route path='/goal' component={Goal}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/profile_edit' component={Profile_edit}></Route>
      <Route path='/create_goal' component={CreateGoal}></Route>
>>>>>>> cc5070eeebf2dcb358f6529dd926c3901167ab49
   </Switch>
    </div>
      </div>
        </div>
    </BrowserRouter>
   
  );
}

export default App;