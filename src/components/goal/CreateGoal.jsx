import React, { useEffect, useState } from "react";
import './create_goal.css'
import Input from '../utils/Input'
import {useDispatch, useSelector} from "react-redux";

export default function CreateGoal() {

  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const currentToken = localStorage.getItem('token')	

async function createGoal() {

	console.log(currentToken)
	await fetch('https://progress-up.herokuapp.com/v1/articles', {

		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + currentToken,
		},
		body: JSON.stringify({
			"article": {
			  "title": title,
			  "content": content
			}
		})
	})
	.then(res => {
		console.log(res);
		console.log(res.json());
	  })
}

	return (
		<div className="create__article">
			<div className="create__article__title">Создание цели</div>
				<form action="post" className="create__article__form">
					<div className="create__article__form_title">
						<div className="create__article__form_title_text">Название</div>
						<Input value={title} setValue={setTitle} type="text" placeholder="введите название цели"/>
					</div>
					<div className="create__article__form_content">
						<div className="create__article__form_content_text">Текст цели</div>
						<Input value={content} setValue={setContent} type="text" placeholder="введите текст цели"/>
					</div>
					</form>
				<button className="create__article__button" type="submit" onClick = {createGoal}>Создать цель</button>
		</div>
	)
}