import '../components/app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './navbar/Navbar'
import Login from './auth/Login'
import Registration from './registration/Registration'
import Goal from './goal/Goal'
import Profile from './profile/Profile'
import Profile_edit from './profile_edit/Profile_edit'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="wrapper">
      <div className="container">
		    <div className="content">
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/registration' component={Registration}></Route>
      <Route path='/goal' component={Goal}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/profile_edit' component={Profile_edit}></Route>
    </Switch>
    </div>
      </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
