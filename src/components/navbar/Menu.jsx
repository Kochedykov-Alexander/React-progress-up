import e from 'cors'
import React from 'react'
import './menu.css'
import {useDispatch, useSelector} from "react-redux";
import { deleteUser } from '../../reducers/userReducer';
import {NavLink} from "react-router-dom";

export default function Menu({header, items, active, setActive}) {

	const dispatch = useDispatch()
	return (
		<div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
			<div className="blur"></div>
			<div className="menu__content" onClick={(e) => e.stopPropagation()}>
				<div className="menu__header">{header}</div>
				<ul>
					{items.map(item => (
						<li>
							{item.href == "/logout" ? (
							<a href={item.href} onClick={() => dispatch(deleteUser())} className="li__href">{item.value}</a>) :
							(<a href={item.href} className="li__href">{item.value}</a>)}
							<span className="material-icons">{item.icon}</span>
					
							
						</li>	
					))}
				</ul>
			</div>
		</div>
	)
}
