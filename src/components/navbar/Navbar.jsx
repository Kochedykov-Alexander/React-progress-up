import React from 'react'
import {NavLink} from "react-router-dom";
import { logout } from '../../reducers/tokenReducer';
import './navbar.css'
import {useDispatch, useSelector} from "react-redux";
import { deleteUser } from '../../reducers/userReducer';

function Navbar() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()
	return (
		<div>
			<div className="header">
				<div className="header__items">
					{!isAuth && <div className="header__item"><NavLink to="/registration">Регистрация</NavLink></div>}
					{!isAuth && <div className="header__item"><NavLink to="/login">Вход</NavLink></div>}

					{isAuth && <div className="header__item"><NavLink to="/users/2">Личный кабинет</NavLink></div>}
					{isAuth && <div className="header__item"><NavLink to="/login" onClick={() => dispatch(deleteUser())}>Выход</NavLink></div>}
				</div>
			</div>
		</div>
	)
}

export default Navbar;
