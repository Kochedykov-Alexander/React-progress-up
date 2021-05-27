import React, { useEffect, useState } from "react";
import './login.css'
import Input from '../utils/Input'
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../reducers/tokenReducer";


export default function Login() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  
 

  const getToken = () => {

	return async dispatch => {
		try {
	await fetch('https://progress-up.herokuapp.com/v1/tokens', {

		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"authorization": {
			  "email": email,
			  "password": password
			}
		})
	})
	.then((res) => res.json())
	.then((response) => {
    	dispatch(setToken("333"))
		localStorage.setItem('token', response.token)
		console.log()
	})
}
	catch (e) {
		console.log(e)
	}
}
}



	return (
		<div className="login">
			<div className="login__title">Вход</div>
				<form action="post" className="login__form">
					<div className="login__form_email">
						<div className="login__form_email_text">Email</div>
						<Input value={email} setValue={setEmail} type="text" placeholder="введите email"/>
					</div>
					<div className="login__form_password">
						<div className="login__form_password_text">Password</div>
						<Input value={password} setValue={setPassword} type="password" placeholder="введите пароль"/>
					</div>
					</form>
				<button className="login__button" type="submit" onClick = {() => dispatch(getToken(email, password))}>Войти</button>
		</div>
	)
}