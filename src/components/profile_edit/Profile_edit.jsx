import {useState, React} from 'react'
import './profile_edit.css'
import Inputs from '../utils/Inputs'
import {Redirect} from "react-router-dom";


export default function Profile_edit() {

	const [email, setEmail] = useState("");
	const [fullname, setFullname] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [description, setDescription] = useState("");

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
			let redirect = "/users/" + response.id;
			console.log(redirect)
			return <Redirect to={redirect} />;
		})
			
	}
		catch (e) {
			console.log(e)
		}
	}


	return (
		<div className="profile_edit">
					<Inputs value={fullname} setValue={setFullname} type="text" className="profile_edit_input" placeholder="Имя"/>
					<div className="profile_edit_info">Конкретная информация:</div>
					<div className="profile_edit_email">
						<div className="profile_edit_email_text">Email: </div>
						<Inputs value={email} setValue={setEmail} type="text" placeholder="email" className="profile_edit_email_input"/>
					</div>
					<div className="profile_edit_phone">
						<div className="profile_edit_phone_text">Телефон: </div>
						<Inputs value={phone} setValue={setPhone} type="text" placeholder="phone" className="profile_edit_phone_input"/>
					</div>
					<div className="profile_edit_phone">
						<div className="profile_edit_phone_text">Пароль: </div>
						<Inputs value={password} setValue={setPassword} type="password" placeholder="password" className="profile_edit_phone_input"/>
					</div>
					<div className="profile_edit_desc">
						<div className="profile_edit_desc_text">Описание: </div>
						<Inputs type="text" value={description} setValue={setDescription} placeholder="description" className="profile_edit_desc_input"></Inputs>
					</div>
					<button className="profile_edit_button" onClick={() => edit_profile(email,password, fullname, phone, description)}>Сохранить изменения</button>
				</div>
	)
}
