import {React, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './goal.css'
import {useDispatch, useSelector} from "react-redux";
import Input from '../utils/Input'
import Modal from '../modal/Modal'
import like from '../../resources/img/like.png'
import unlike from '../../resources/img/unlike.png'


export default function Goal(props) {

	const [modalActive, setModalActive] = useState(false);
    const currentToken = localStorage.getItem('token')
	const url = 'https://progress-up.herokuapp.com/v1/articles/' + props.match.params.id;
    const [goal, setGoal] = useState([]);
	const [comment, setComment] = useState("");

	useEffect(() => {
  
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
	}, [goal])

  async function createComment() {
	try {
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
	.then((res) => res.json())
	.then((response) => {
	   setComments(comments => [...comments, {id: response.id, content: response.content, user_id: response.user_id, created_at: response.created_at, article_id: response.article_id} ])})
	   setComment('')
}	catch (e) {
	console.log(e)
}
  }

  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState([]);
  const [progressList, setProgressList] = useState([]);

useEffect(() => {

	fetch('https://progress-up.herokuapp.com/v1/comments?article_id=' + props.match.params.id, {

		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + currentToken,
		}
	})
	.then((res) => res.json())
		.then((res) => setComments(res))
  }, []);

	// let new_arr = comments;

	function smallestToBiggest(a, b) {
		// var dateA=new Date(a.created_at), dateB=new Date(b.created_at)
		// return dateA-dateB
		return a.comment_id - b.comment_id
	  }
	  
	  function biggestToSmallest(a, b) {
		// var dateA=new Date(a.created_at), dateB=new Date(b.created_at)
		// return dateB-dateA
		return b.comment_id - a.comment_id
	  }

	useEffect(() => {
		setAuthor([])
		const getDetails = async (comment_id, id, comment_content, comment_time) => { await fetch("https://progress-up.herokuapp.com/v1/users/" + id, {
		   method: 'get',
		   headers: {
			   'Accept': 'application/json',
					   'Content-Type': 'application/json',
					   'Authorization': 'Bearer ' + currentToken
		   },
		   
		})
	
	   .then((res) => res.json())
	   .then((response) => {
		   setAuthor(author => [...author, {comment_id: comment_id, full_name: response.full_name, id: response.id, content: comment_content, created_at: comment_time }])
	   })}
	   comments.forEach((item => getDetails(item.id, item.user_id, item.content, item.created_at)))
	//    let sorted_arr = author;
	//    sorted_arr.sort(biggestToSmallest)
	//    setAuthor(sorted_arr)
	} , [comments])

	useEffect(() => {
  
		fetch('https://progress-up.herokuapp.com/v1/progress_informations?article_id=' + props.match.params.id, {
	
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			}
		})
		.then((res) => res.json())
			.then((res) => setProgressList(res))

	}, [progressList]);


	  const [progress, setProgress] = useState("");

	  async function createProgress() {
		try {
		await fetch('https://progress-up.herokuapp.com/v1/progress_informations', {
	
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			body: JSON.stringify({
				"progress_information": {
				  "article_id": props.match.params.id,
				  "content": progress,
				  "amount": 15000
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

	  const [likeMark, setLikeMark] = useState(0);
	  async function createLike() {
		try {
		await fetch('https://progress-up.herokuapp.com/v1/likes', {
	
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			body: JSON.stringify({
				"like": {
				  "article_id": props.match.params.id
				}
			})
		})
		.then(res => {
			console.log(res)
			console.log(res.json());
			setLikeMark(1)
		  })
	}	catch (e) {
		console.log(e)
	}
	  }

	  async function deleteLike() {
		try {
		await fetch('https://progress-up.herokuapp.com/v1/likes/' + likeId, {
	
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			},
			body: JSON.stringify({		
				"article_id": props.match.params.id
			})
		})
		.then(res => {
			console.log(res)
			console.log(res.json());
			setLikeMark(0)
		  })
	}	catch (e) {
		console.log(e)
	}
	  }

	  const [likes, setLikes] = useState([]);
	  useEffect(() => {

		fetch('https://progress-up.herokuapp.com/v1/likes?article_id=' + props.match.params.id, {
	
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + currentToken,
			}
		})
		.then((res) => res.json())
			.then((res) => setLikes(res))
	  }, [likes]);

	
	const currentUser = useSelector(state => state.user.currentUser)

	const [likeId, setLikeId] = useState()

	useEffect(() => {
		try {
		likes.map((like) => {
			if (like.user_id == currentUser.id) {
				setLikeMark(1)
				setLikeId(like.id)
			}
		})
	}	catch (e) {
		console.log(e)
	}
	}, [likes])

	  function LikeDiv(props) {
		const [isLiked ] = useState(props);
		if (isLiked.isLiked == 1) {
		  	return <Like />
		} else if (isLiked.isLiked == 0) {
		return <Unlike />
		}
	  }

	  function Like(props) {
		return (
			<div className="goal__story__likes">
				<div className="goal__story__likes_count">{likes.length}</div>
				<div className="goal__story__likes_photo"><button  onClick={deleteLike}><img src={like} alt="" className="goal__story__likes_photo_img"/></button></div>
			</div>
		)
	  }
	  
	  function Unlike(props) {
		return (
			<div className="goal__story__likes">
				<div className="goal__story__likes_count">{likes.length}</div>
				<div className="goal__story__likes_photo"><button  onClick={createLike}><img src={unlike} alt="" className="goal__story__likes_photo_img"/></button></div>
			</div>
		)
	  }


	  const [subscription, setSubscription] = useState([])

	  const createSubscription = async () => {
  
	  try {
		  await fetch(urlCreateSubscription, {
	  
			  method: 'post',
			  headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json',
				  'Authorization': 'Bearer ' + currentToken,
			  },
			  body: JSON.stringify(
				  {
				   "user_id": props.match.params.user_id
				  }
			  )
		  })
		  .then((res) => res.json())
		  .then((response) => {
			  const id_response = '/users/' + response.id;
		  })
	  }
		  catch (e) {
			  console.log(e)
		  }
	  
	  }
		  
	  const urlCreateSubscription = 'https://progress-up.herokuapp.com/v1/subscriptions'
	  const listSubscriptions = 'https://progress-up.herokuapp.com/v1/subscriptions'
	  const [subs, setSubs] = useState([]);
	  
  
  
	  useEffect(() => {
		  fetch(listSubscriptions, {
			 method: 'get',
			 headers: {
				 'Accept': 'application/json',
						 'Content-Type': 'application/json',
						 'Authorization': 'Bearer ' + currentToken
			 },
			 
		 })
		 .then((res) => res.json())
		 .then((response) => {
			 setSubscription(response)
		 })} , [subs])
  
	  var noSubs = new Boolean(true);
  
	  subscription.map((sub) => ((props.match.params.id == sub.entity_id) && (currentUser.id == sub.user_id)) ? noSubs = false : null)
	  

	return (
		
		<div className="goAl">
			<Modal active = {modalActive} setActive={setModalActive}>
				<div className="modal__title">
					Обновление прогресса
				</div>
				<Input value={progress} setValue={setProgress} className="modal__textarea" type="text" />
						<button type="submit" className="modal__button" onClick = {createProgress}>Добавить</button>
			</Modal> 
		<div className="goal">
					<div className="goal__title">
						{goal.title}
					</div>
					<div className="goal__desc">
						{goal.content}
					</div>
					<LikeDiv isLiked={likeMark} />
					<div className="goal__button">
					{(currentUser.id == goal.user_id) &&
						<button type="submit" className="goal__button_subscribe" onClick={() => setModalActive(true)}>Обновить прогресс</button>
						}
					{!(currentUser.id ==  goal.user_id) && (noSubs) &&
						// <button type="submit" className="goal__button_subscribe">Подписаться на цель</button>
						<NavLink to= "/subscriptions" onClick={() => createSubscription()} className="goal__button_subscribe">Подписаться на цель</NavLink>
					}
					{!(currentUser.id ==  goal.user_id) && !(noSubs) &&
						<NavLink to= "/subscriptions" onClick={() => createSubscription()} className="goal__button_subscrib">Отписаться от цели</NavLink>
					}
					</div>
					{progressList?.map((progress) => (
									<ProgressCard
										content={progress.content}
										created_at={progress.created_at.substring(0, 10)}
										key={progress.id}
									/>
								))}
				</div>

				<div className="comments">
					<div className="comments__form">
						<Input id="comment_input" value={comment} setValue={setComment} className="comments__form_input" type="text" />
						<button type="submit" className="comments__form_submit" onClick = {createComment}>Отправить</button>
					</div>

					<div className="comments__items">
							{author.sort(biggestToSmallest).map((comm) => (
									<CommentCard
									content={comm.content}
										created_at={comm.created_at.substring(0, 10)}
										user={comm.full_name}
										key={comm.comment_id}
										user_id={comm.id}
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
			<NavLink to={"/user/" + comm.user_id} className="profile__info_submit">{comm.user}</NavLink>
			</div>
			<div className="comments__item__info_date">
				{comm.created_at}
			</div>
		</div>
		<div className="comments__item__text">{comm.content}</div>
	</div>

    );
  }


  function ProgressCard(props) {
    const [progress ] = useState(props);
    return (

	<div className="goal__story">
	<div className="goal__story_date">{progress.created_at}</div>
	<div className="goal__story_name">{progress.content}</div>
	</div>

    );
  }