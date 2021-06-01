import e from 'cors'
import React from 'react'
import './menu.css'

export default function Menu({header, items, active, setActive}) {
	return (
		<div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
			<div className="blur"></div>
			<div className="menu__content" onClick={(e) => e.stopPropagation()}>
				<div className="menu__header">{header}</div>
				<ul>
					{items.map(item => 
						<li>
							<a href={item.href} className="li__href">{item.value}</a>
							<span className="material-icons">{item.icon}</span>
						</li>	
					)}
				</ul>
			</div>
		</div>
	)
}
