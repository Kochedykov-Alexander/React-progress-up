import React from 'react'
import {NavLink} from 'react-router-dom'
import './profile.css'

export default function Profile() {
	return (
		<div>
			<div className="profile">
					<div className="profile__name">
						Имя 
					</div>
					<div className="profile__info_title">Контактная информация: </div>
						<div className="profile__info">
							<div className="profile__info_email">Email: </div>
							<div className="profile__info_phone">Телефон: *номер телефона*</div>
							<div className="profile__info_desc">Описание: </div>
						</div>
						<NavLink to='/profile_edit' className="profile__info_submit">Редактировать профиль</NavLink>
					
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
