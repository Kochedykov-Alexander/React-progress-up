import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import './goals_list.css'
import Input from '../utils/Input'
import {useDispatch, useSelector} from "react-redux";

export default function GoalList() {

    // const currentAuth = useSelector(state => state.token)
    const currentToken = localStorage.getItem('token')
  
    const [goals, setGoals] = useState([]);

  async function getGoalsList() {
  
      console.log(currentToken)
      await fetch('https://progress-up.herokuapp.com/v1/articles', {
  
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + currentToken,
          }
      })
      .then((res) => res.json())
        .then((result) => setGoals(result)) 
  }

  useEffect(() => {
    getGoalsList();
  }, []);

  console.log(goals)

	return (
        <div>

				<div class="goals">
					<div class="goals__items">
                        {goals?.map((goal) => (
                            <GoalCard
                                title={goal.title}
                                created_at={goal.created_at.substring(0, 10)}
                                content={goal.content.substring(0, 50) + '...'}
                                id={goal.id}
                            />


                        ))}
        
					</div>
				</div>		
                </div>
				
	)
}


function GoalCard(props) {
    const [goal ] = useState(props);
    return (
        <div class="goal__item">
        <div class="goal__item_name">
            {goal.title}
        </div>
        <div class="goal__item_update">
            <div class="goal__item_update_title">Контент:</div>
            <div class="goal__item_update_last">{goal.content}</div>
            <div class="goal__item_update_date">{goal.created_at}</div>
            
        </div>
        <a href={"/article/" + goal.id} class="goal__item_link">Перейти к цели</a>
        </div>

    );
  }