import React from 'react'
import './navbar.css'

export default function Navbars({active, setActive}) {
	return (
		<div className="header">
			<div className="burger-btn" onClick={() => setActive(!active)}>
				<span/>
			</div>
		</div>
	)
}

