import React, { useEffect, useState } from "react";
import './registration.css'
import Input from '../utils/Input'
import axios from 'axios'

export default function Registration() {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [full_name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [description, setDescription] = useState("");


	// async function signUp() {

	// 	await fetch('https://progress-up.herokuapp.com/v1/registrations', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			"user": {
	// 			  "full_name": full_name,
	// 			  "email": email, 
	// 			  "password": password,
	// 			  "phone": phone,
	// 			  "description": 'my description'
	// 			}
	// 		})
	// }).then(res => {
	// 		console.log(res);
	// 		console.log(res.body);
	// 	  }) }

// 	function signUp() {
  
// 		let headers = new Headers();

// 		headers.append('Content-Type', 'application/json');
// 		headers.append('Accept', 'application/json');

// 	  axios({
// 		  method: 'POST',
// 		  url: `https://progress-up.herokuapp.com/v1/registrations`,
// 		  headers: headers,
// 		  data: { full_name: full_name,
// 			  	  email: email, 
// 				  password: password,
// 				  phone: phone,
// 				  description: 'my description'
// 	   }
	
//   }).then(res => {
// 		  console.log(res.data);
// 		}).catch(error => {
// 			console.log(error.response)
// 		});
  
// 	  }	


	// function signUp() {

	// axios.post({
	// 	url: `https://progress-up.herokuapp.com/v1/registrations`,
	// 	data: { 
	// 		full_name: full_name,
	// 		email: email, 
	// 		password: password,
	// 		phone: phone,
	// 		description: 'my description'
	// }
	// }).then(response => {
	// 	console.log(response);
	// 	})
	// }
	
	async function signUp() {


		await fetch('https://progress-up.herokuapp.com/v1/registrations', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"user": {
				  "full_name": full_name,	
			  	  "email": email, 
				  "password": password,
				  "phone": phone,
				  "description": 'my description'
				}
			})
	}).then(res => {
			console.log(res);
			console.log(res.json());
		  })
	}

	return (
		<div class="registration">
			<div class="registration__title">Регистрация</div>
				<form action="" className="registration__form">
					<div class="registration__form_name">
						<div class="registration__form_name_text">Имя</div>
						<Input value={full_name} setValue={setFullName} type="text" placeholder="введите имя"/>
					</div>
					<div class="registration__form_email">
						<div class="registration__form_email_text">Email</div>
						<Input value={email} setValue={setEmail} type="text" placeholder="введите email"/>
					</div>
					<div class="registration__form_phone">
						<div class="registration__form_phone_text">Номер телефона</div>
						<Input value={phone} setValue={setPhone} type="tel" placeholder="введите номер телефона"/>
					</div>
					<div class="registration__form_password">
						<div class="registration__form_password_text">Пароль</div>
						<Input value={password} setValue={setPassword} type="password" placeholder="введите пароль"/>
					</div>
					<div class="registration__form_password_repeat">
						<div class="registration__form_password_repeat_text">Повторите пароль</div>
						<input type="password" placeholder="введите пароль еще раз"/>
					</div>
					</form>
					<button class="registration__button" type="submit" onClick={signUp}>Зарегистрироваться</button>
		</div>
	)
}
