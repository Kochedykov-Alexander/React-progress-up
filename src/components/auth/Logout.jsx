import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteUser } from '../../reducers/userReducer';
import {NavLink, Redirect} from "react-router-dom";

export default function Logout() {
	const dispatch = useDispatch()
	return (
		<div>
			{dispatch(deleteUser())}
		</div>
	)
}
