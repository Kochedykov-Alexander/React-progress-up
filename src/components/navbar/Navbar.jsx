import React from 'react'
import {NavLink} from "react-router-dom";
import { logout } from '../../reducers/tokenReducer';
import './navbar.css'
import {useDispatch, useSelector} from "react-redux";

function Navbar() {
	const isAuth = useSelector(state => state.token.isAuth)
	const dispatch = useDispatch()
	return (
		<div>
			<div className="header">
				<div className="header__items">
					{!isAuth && <div className="header__item"><NavLink to="/registration">Регистрация</NavLink></div>}
					{!isAuth && <div className="header__item"><NavLink to="/login">Вход</NavLink></div>}

					{isAuth && <div className="header__item"><NavLink to="/goals_list">Личный кабинет</NavLink></div>}
					{isAuth && <div className="header__item"><NavLink to="#" onClick={() => dispatch(logout())}>Выход</NavLink></div>}
				</div>
			</div>
		</div>
	)
}

export default Navbar;
