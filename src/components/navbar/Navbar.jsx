import React from 'react'
import {NavLink} from "react-router-dom";
import { logout } from '../../reducers/tokenReducer';
import './navbar.css'
import {useDispatch, useSelector} from "react-redux";
import { deleteUser } from '../../reducers/userReducer';

function Navbar(props) {
	const url = "/users/" + props.currentUser.id
	
	const dispatch = useDispatch()
	return (
		<div>
			<div className="header">
				<div className="header__items">
					{!props.isAuth && <div className="header__item"><NavLink to="/registration">Регистрация</NavLink></div>}
					{!props.isAuth && <div className="header__item"><NavLink to="/login">Вход</NavLink></div>}

					{props.isAuth && <div className="header__item"><NavLink to={url}>Личный кабинет</NavLink></div>}
					{props.isAuth && <div className="header__item"><NavLink to="/login" onClick={() => dispatch(deleteUser())}>Выход</NavLink></div>}
				</div>
			</div>
		</div>
	)
}

export default Navbar;