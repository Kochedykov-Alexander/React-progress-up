import React from 'react'
import './login.css'

export default function Login() {
	return (
		<div className="login">
			<div className="login__title">Вход</div>
				<form action="" className="login__form">
					<div className="login__form_email">
						<div className="login__form_email_text">Email</div>
						<input type="text" placeholder="введите email"/>
					</div>
					<div className="login__form_password">
						<div className="login__form_password_text">Password</div>
						<input type="password" placeholder="введите пароль"/>
					</div>
					</form>
				<button className="login__button" type="submit">Войти</button>
		</div>
	)
}
