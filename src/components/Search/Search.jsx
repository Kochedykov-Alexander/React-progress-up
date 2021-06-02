import {React, useEffect, useState} from 'react'
import Input from '../utils/Input'
import {NavLink, Redirect} from 'react-router-dom'
import './search.css'

export default function Search() {
	const [value, setValue] = useState("")
	const [result, setResult] = useState([])
	const searchUrl = 'https://progress-up.herokuapp.com/v1/articles'
	const [articles, setArticles] = useState([])

	

	useEffect(() => {
		fetch(searchUrl, {
		   method: 'get',
		   headers: {
			   'Accept': 'application/json',
					   'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + localStorage.getItem('token')
		   },
		   
	   })
	   .then((res) => res.json())
	   .then((response) => {
		   setArticles(response)
	   })} , [articles])

	   useEffect(() => {
		setResult(articles.filter(item => (item.title.includes(value))))
	},[value])

	

	return (
		<div>
			<Input value={value} setValue={setValue} type="text" placeholder="поиск"/>
			<div className="goals">
				<div className="goals__items">
				{result.length != 0 &&
				result.map((elem) => (
					<div className="goal__item">
							<div className="goal__item_name">
								{elem.title}
							</div>
							<div className="goal__item_update">
								<div className="goal__item_update_title">Последнее обновление:</div>
								<div className="goal__item_update_last">{elem.content}</div>
								<div className="goal__item_update_date">{elem.created_at.slice(0, 10)} в {elem.created_at.slice(11, 16)}</div>
								
							</div>
							<NavLink to="/goal" className="goal__item_link">Перейти к цели</NavLink>
						</div>
						
				))}
					
						
				</div>
				{result.length == 0 &&
				(<div className="no_result">Нет результатов</div>)}
			
		</div>
			
			
			
		</div>
	)
}
