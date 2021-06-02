import {React, useEffect, useState} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import './subscription.css'
import {useDispatch, useSelector} from "react-redux";

export default function Subscriptions() {

	const currentToken = localStorage.getItem('token')
	const listSubscriptions = 'https://progress-up.herokuapp.com/v1/subscriptions'
	const itemSubscribe = 'https://progress-up.herokuapp.com/v1/users/'
	const [subscription, setSubscription] = useState([]);
	const [user, setUser] = useState([]);
	
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
	   .then((response) => {
		   setSubscription(response)
	   })} , [])

	var obj = {};
	let new_arr = useState([]);
	   
	
	subscription.forEach(function(v){
		obj[v['entity_id']] = v;
	});
	new_arr = Object.keys(obj).map(function(id) { return obj[id]; });

	useEffect(() => {
		const getDetails = async (id) => { await fetch(itemSubscribe + id, {
		   method: 'get',
		   headers: {
			   'Accept': 'application/json',
					   'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + currentToken
		   },
		   
		},[])
	
	   .then((res) => res.json())
	   .then((response) => {
		   setUser(user => [...user, {fullname: response.full_name, id: response.id, description: response.description}])
	   })}
	   new_arr.forEach((item => getDetails(item.entity_id)))
	} , [subscription])

	// console.log(user)  
	// console.log(subscription)  
	


	return (
		<div>
			<div className="subscription_title">Ваши подписки</div>
			<div className="subscription_title_desc">Здесь будут отображаться ваши подписки. С помощью этой функции вы можете следить за интересующими вас людьми и целями! Вы можете перейте на страницу интересующего человека или цели, кликнув по ней.</div>
			<div className="subscription__items">{new_arr.map(item => <NavLink to={"/" + item.entity_type.toLowerCase() + "/" + item.entity_id}>
			<div className="subscription__item"><div>{user.map((i) => (i.id == item.entity_id) && (<div className="subscription_name">{i.fullname}<div className="subscription_desc">Описание: {i.description}</div></div>))}</div>
			<div className="subscription__bottom"><div className="subscription_type">Тип подписки: {item.entity_type}</div></div><div className="time">{item.created_at.slice(0, 10) + " в " + item.created_at.slice(11, 16)}</div>
			
			</div></NavLink>)}</div>
		</div>
		
	)
}
