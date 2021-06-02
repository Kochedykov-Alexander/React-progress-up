import {React, useEffect, useState} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import './profile.css'
import {useDispatch, useSelector} from "react-redux";
import logo from '../../resources/img/avatar_demo.jpg'


export default function Profile(props) {

	const currentToken = localStorage.getItem('token')
	const url = 'https://progress-up.herokuapp.com/v1/users/' + props.match.params.user_id
	const urlCreateSubscription = 'https://progress-up.herokuapp.com/v1/subscriptions'
	const [data, setData] = useState([]);
	const currentUser = useSelector(state => state.user.currentUser)
	const [goals, setGoals] = useState([])
	const [goal, setGoal] = useState([])
	const [subscription, setSubscription] = useState([])

	const createSubscription = async () => {

	try {
		await fetch(urlCreateSubscription, {
	
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			body: JSON.stringify(
				{
				 "user_id": props.match.params.user_id
				}
			)
		})
		.then((res) => res.json())
		.then((response) => {
			const id_response = '/users/' + response.id;
		})
	}
		catch (e) {
			console.log(e)
		}
	
	}
	
	

	
	useEffect(() => {
		 fetch(url, {
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
			setGoals(user.article_ids)
		})} , [])
	
		const {id, full_name, email, phone, description} = data;
		const urlToEdit = "/users/edit/" + id;
		

	const listSubscriptions = 'https://progress-up.herokuapp.com/v1/subscriptions'
	const [subs, setSubs] = useState([]);
	


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
	   })} , [subs])

	var noSubs = new Boolean(true);

	subscription.map((sub) => ((props.match.params.user_id == sub.entity_id) && (currentUser.id == sub.user_id)) ? noSubs = false : null)
	
	

	
	useEffect(() => {
		
		const fetchGoals = async (id) => {
			await fetch('https://progress-up.herokuapp.com/v1/articles/' + id, {
				method: 'get',
				headers: {
				'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + currentToken
			},
			
		})
		.then((res) => res.json())
		.then((response) => {
			setGoal(prevGoal => ([...prevGoal , { 
				id: response.id,
				title: response.title,
				content: response.content,
				user_id: response.user_id,
				created_at: response.created_at,
			}])
		)})}
		goals.forEach(elem => { 
			fetchGoals(elem);
		})
	
	}, [goals])

		

		
	console.log(goal)

	return (
		<div className="profile_and_goals">
			<div className="profile_and_photo">
			<div className="profile">
					<div className="profile__name">
						{full_name} 
					</div>
					<div className="profile__info_title">Контактная информация: </div>
						<div className="profile__info">
							<div className="profile__info_email">Email: {email}</div>
							<div className="profile__info_phone">Телефон:  {phone}</div>
							<div className="profile__info_desc">Описание: {description}</div>
						</div>
						{(currentUser.id == props.match.params.user_id) &&
						<NavLink to={urlToEdit} className="profile__info_submit">Изменить пароль и личные данные</NavLink>
						}
						{!(currentUser.id == props.match.params.user_id) && (noSubs) &&
						<NavLink to= "/subscriptions" onClick={() => createSubscription()} className="profile__info_submit">Подписаться на пользователя</NavLink>
						}
						{!(currentUser.id == props.match.params.user_id) && !(noSubs) &&
						<NavLink to= "/subscriptions" onClick={() => createSubscription()} className="profile__info_submit">Отписаться от пользователя</NavLink>
						}
					
				</div>
					<div className="profile__photo">
					<div class="profile__photo_img" alt=""><img src={logo} alt=""/></div>
				</div>
				</div>
				
				

				<div className="goals">
					<div className="goals__items">
						{goal.map((elem) => 
						<div className="goal__item">
							<div className="goal__item_name">
								{elem.title}
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">{elem.content}</div>
								<div className="goal__item_update_date">{elem.created_at.slice(0, 10)} в {elem.created_at.slice(11, 16)}</div>
								
							</div>
							<NavLink to={"/article/" + elem.id} className="goal__item_link">Перейти к цели</NavLink>
						</div>
						)}

						
						
				</div>
		</div>
		</div>
	)
}