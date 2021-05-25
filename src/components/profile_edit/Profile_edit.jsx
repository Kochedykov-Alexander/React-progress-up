import React from 'react'
import './profile_edit.css'

export default function Profile_edit() {
	return (
		<div className="profile_edit">
					<input type="text" className="profile_edit_input" placeholder="Имя"/>
					<div className="profile_edit_info">Конкретная информация:</div>
					<div className="profile_edit_email">
						<div className="profile_edit_email_text">Email: </div>
						<input type="text" className="profile_edit_email_input"/>
					</div>
					<div className="profile_edit_phone">
						<div className="profile_edit_phone_text">Телефон: </div>
						<input type="text" className="profile_edit_phone_input"/>
					</div>
					<div className="profile_edit_desc">
						<div className="profile_edit_desc_text">Описание: </div>
						<textarea type="text" className="profile_edit_desc_input"></textarea>
					</div>
					<button className="profile_edit_button">Сохранить изменения</button>
				</div>
	)
}
