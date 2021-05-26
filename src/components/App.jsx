import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Login from './auth/Login';
import Goal from './goal/Goal'
import CreateGoal from './goal/CreateGoal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'
import Registration from './registration/Registration'
import {useSelector} from 'react-redux'


function App() {

  const isAuth = useSelector(state => state.token.isAuth)

  return (
    <BrowserRouter>
    <Navbar/>
    <div className="wrapper">
      <div className="container">
		    <div className="content">
        {!isAuth &&
          <Switch>
          <Route path='/registration' component={Registration}></Route>  
          <Route path='/login' component={Login}></Route>
          </Switch>
        }
    <Switch>
      <Route path='/goal' component={Goal}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/profile_edit' component={Profile_edit}></Route>
      <Route path='/create_goal' component={CreateGoal}></Route>
   </Switch>
    </div>
      </div>
        </div>
    </BrowserRouter>
  );
}

export default App;