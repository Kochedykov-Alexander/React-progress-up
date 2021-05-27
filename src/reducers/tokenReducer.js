const SET_TOKEN = "SET_TOKEN"
const LOGOUT = "SET_LOGOUT" 

export const defaultState = {
    currentToken: "",
    isAuth: false
}

export default function tokenReducer(state = defaultState, action) {
    switch (action.type) {
		case SET_TOKEN: 
		return {
			...state, 
			currentToken: action.payload,
			isAuth: true
		}
		case LOGOUT: 
		localStorage.removeItem('token')
		return {
			...state, 
			currentToken: "",
			isAuth: false
		}
        default:
            return state
    }
}

export const setToken = (token) => ({type: SET_TOKEN, payload: token})
<<<<<<< HEAD
export const logout = () => ({type: LOGOUT})

=======
export const logout = () => ({type: LOGOUT})
>>>>>>> cc5070eeebf2dcb358f6529dd926c3901167ab49
