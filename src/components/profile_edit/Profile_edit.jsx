import {useState, React, useEffect} from 'react'
import './profile_edit.css'
import Inputs from '../utils/Inputs'
import {Redirect} from "react-router-dom";


export default function Profile_edit(props) {
	
	
	const [email, setEmail] = useState(props.user.email);
	const [fullname, setFullname] = useState(props.user.full_name);
	const [password, setPassword] = useState(props.user.password);
	const [phone, setPhone] = useState(props.user.phone);
	const [description, setDescription] = useState(props.user.description);

	const currentToken = localStorage.getItem('token')

	const edit_profile = async (email, password, fullname, phone, description) => {
		
		try {
			const response = await fetch(`https://progress-up.herokuapp.com/v1/profile`, {   
				
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			body: JSON.stringify({
				"user": {
					"full_name": fullname,
					"email": email,
					"password": password,
					"phone": phone,
					"description": description
				  }
			})
		})
		.then((res) => res.json())
		.then((response) => {
			console.log(response)
			let redirect = "/user/" + response.id;
			return <Redirect to={redirect}></Redirect>;
		})
			
	}
		catch (e) {
			console.log(e)
		}
	}



	return (
		<div className="profile_edit">
					<Inputs value={fullname} setValue={setFullname} type="text" className={"profile_edit_input"} placeholder="Введите свое имя"/>
					<div className="profile_edit_info">Конкретная информация:</div>
					<div className="profile_edit_email">
						<div className="profile_edit_email_text">Email: </div>
						<Inputs value={email} setValue={setEmail} type="text" placeholder="email"/>
					</div>
					<div className="profile_edit_phone">
						<div className="profile_edit_phone_text">Телефон: </div>
						<Inputs value={phone} setValue={setPhone} type="text" placeholder="введите номер телефона" className="profile_edit_phone_input"/>
					</div>
					<div className="profile_edit_phone">
						<div className="profile_edit_password_text">Пароль: </div>
						<Inputs value={password} setValue={setPassword} type="password" placeholder="введите пароль" className="profile_edit_phone_input"/>
					</div>
					<div className="profile_edit_desc">
						<div className="profile_edit_desc_text">Описание: </div>
						<Inputs type="text" value={description} setValue={setDescription} placeholder="опишите себя" className="profile_edit_desc_input"></Inputs>
					</div>
					<button className="profile_edit_button" onClick={() => edit_profile(email,password, fullname, phone, description)}>Сохранить изменения</button>
				</div>
	)
}
