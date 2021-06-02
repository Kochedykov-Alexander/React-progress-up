import React from 'react'
import './navbars.css'

export default function Navbars({active, setActive}) {
	return (
		<div className="header">
			<div className="burger-btn" onClick={() => setActive(!active)}>
				<span/>
			</div>
		</div>
	)
}
