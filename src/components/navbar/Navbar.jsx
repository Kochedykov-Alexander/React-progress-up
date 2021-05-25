import React from 'react'
import {NavLink} from "react-router-dom";
import './navbar.css'

function Navbar() {
	return (
		<div>
			<div className="header">
				<div className="header__items">
					<div className="header__item"><NavLink to="/registration">Регистрация</NavLink></div>
					<div className="header__item"><NavLink to="/login">Вход</NavLink></div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
