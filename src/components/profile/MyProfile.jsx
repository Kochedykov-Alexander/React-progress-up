import {React, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './profile.css'
import {useDispatch, useSelector} from "react-redux";


export default function MyProfile(props) {

	const currentToken = localStorage.getItem('token')
	const url = 'https://progress-up.herokuapp.com/v1/users/' + props.match.params.user_id;
	const [data, setData] = useState([]);
	console.log(currentToken)
	const currentAuth = useSelector(state => state.token)
	

	
	useEffect(() => {
		 fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			
		})
		.then((res) => res.json())
		.then((user) => {
			setData(user)
			console.log(currentAuth);
		})} , [data])
	
		const {id, full_name, email, phone, description} = data;
		const urlToEdit = "/users/edit/" + id;
	


	return (
		<div>
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
						<NavLink to={urlToEdit} className="profile__info_submit">Редактировать профиль</NavLink>
					
				</div>

				<div className="goals">
					<div className="goals__items">
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">*контент последнего обновления*</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit doloribus in unde eveniet dolor excepturi, ex inventore facere libero facilis fugiat eligendi, reprehenderit, tempora aspernatur. Voluptas iste odit temporibus impedit!</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						<div className="goal__item">
							<div className="goal__item_name">
								Название цели
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias cumque eum explicabo consequatur voluptatum obcaecati harum rem illum accusantium itaque tenetur iure officia cum, quibusdam ad doloremque modi in!</div>
								<div className="goal__item_update_date">*дата обновления*</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
					</div>
				</div>
		</div>
	)
}