import {React, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './goal.css'
import {useDispatch, useSelector} from "react-redux";
import Input from '../utils/Input'


export default function Goal(props) {

    const currentToken = localStorage.getItem('token')
	const url = 'https://progress-up.herokuapp.com/v1/articles/' + props.match.params.id;
    const [goal, setGoal] = useState([]);
	const [comment, setComment] = useState("");
  function getGoal() {
  
      fetch(url, {
  
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + currentToken,
          }
      })
      .then((res) => res.json())
        .then((result) => setGoal(result)) 
  }

  async function createComment() {
	try {
	console.log(currentToken)
	await fetch('https://progress-up.herokuapp.com/v1/comments', {

		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + currentToken,
		},
		body: JSON.stringify({
			"comment": {
			  "article_id": props.match.params.id,
			  "content": comment
			}
		})
	})
	.then(res => {
		console.log(res)
		console.log(res.json());
	  })
}	catch (e) {
	console.log(e)
}
  }

  useEffect(() => {
    getGoal();
  }, [goal])

  const [comments, setComments] = useState([]);

  async function getCommentsList() {
  
      await fetch('https://progress-up.herokuapp.com/v1/comments?article_id=' + props.match.params.id, {
  
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + currentToken,
          }
      })
      .then((res) => res.json())
        .then((result) => setComments(result)) 
  }

  useEffect(() => {
    getCommentsList();
  }, []);

  const {id, title, content, user_id, created_at} = goal;

	return (
		<div className="goAl">
		<div className="goal">
					<div className="goal__title">
						{title}
					</div>
					<div className="goal__desc">
						content
					</div>
					<div className="goal__button">
						<button type="submit" className="goal__button_subscribe">Подписаться на цель</button>
					</div>
					<div className="goal__story">
						<div className="goal__story_date">*дата*</div>
						<div className="goal__story_name">последнее обновление</div>
						<div className="goal__story__likes">
							<div className="goal__story__likes_count">52</div>
							<div className="goal__story__likes_photo"><a href=""><img src="/goal/img/Без названия 1.png" alt="" className="goal__story__likes_photo_img"/></a></div>
						</div>
					</div>
					<div className="goal__story">
						<div className="goal__story_date">*дата*</div>
						<div className="goal__story_name">последнее обновление</div>
						<div className="goal__story__likes">
							<div className="goal__story__likes_count">52</div>
							<div className="goal__story__likes_photo"><a href=""><img src="/goal/img/Без названия 2.png" alt="" className="goal__story__likes_photo_img"/></a></div>
						</div>
					</div>
				</div>

				<div className="comments">
					<div className="comments__form">
						<Input value={comment} setValue={setComment} className="comments__form_input" type="text" />
						<button type="submit" className="comments__form_submit" onClick = {createComment}>Отправить</button>
					</div>

					<div className="comments__items">
							{comments?.map((comm) => (
									<CommentCard
									content={comm.content}
										created_at={comm.created_at.substring(0, 10)}
										user={comm.user_id}
										id={comm.id}
									/>

								))}

					</div>

				</div>
				

				</div>
			

				
	)
}


function CommentCard(props) {
    const [comm ] = useState(props);
    return (

		<div className="comments__item">
		<div className="comments__item__info">
			<div className="comments__item__info_name">
				{comm.user}
			</div>
			<div className="comments__item__info_date">
				{comm.created_at}
			</div>
		</div>
		<div className="comments__item__text">{comm.content}</div>
	</div>

    );
  }