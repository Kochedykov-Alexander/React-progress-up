import React, { useEffect, useState } from "react";
import './login.css'
import Input from '../utils/Input'
import axios from 'axios'

export default function Login() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getToken() {


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
}).then(res => {
        console.log(res);
        console.log(res.json());
      })
}	   


	return (
		<div className="login">
			<div className="login__title">Вход</div>
				<form action="" className="login__form">
					<div className="login__form_email">
						<div className="login__form_email_text">Email</div>
						<Input value={email} setValue={setEmail} type="text" placeholder="введите email"/>
					</div>
					<div className="login__form_password">
						<div className="login__form_password_text">Password</div>
						<Input value={password} setValue={setPassword} type="password" placeholder="введите пароль"/>
					</div>
					</form>
				<button className="login__button" type="submit" onClick={getToken}>Войти</button>
		</div>
	)
}