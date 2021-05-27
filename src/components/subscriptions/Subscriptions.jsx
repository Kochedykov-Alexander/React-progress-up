import {React, useEffect, useState} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import './subscription.css'
import {useDispatch, useSelector} from "react-redux";

export default function Subscriptions() {

	const currentToken = localStorage.getItem('token')
	const listSubscriptions = 'https://progress-up.herokuapp.com/v1/subscriptions'
	const [data, setData] = useState([]);
	


	useEffect(() => {
		fetch(listSubscriptions, {
		   method: 'get',
		   headers: {
			   'Accept': 'application/json',
					   'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + currentToken
		   },
		   
	   })
	   .then((res) => res.json())
	   .then((user) => {
		   setData(user)
	   })} , [data])

	   


	return (
		
			<div className="subscription__items">{data.map(d => <NavLink to="#"><div className="subscription__item"> <div>Здесь будет юзернэйм {d.entity_id}</div> {d.entity_type} <div className="time">{d.created_at}</div></div></NavLink>)}</div>
		
	)
}
