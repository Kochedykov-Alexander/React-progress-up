const SET_TOKEN = "SET_TOKEN"
const LOGOUT = "SET_LOGOUT" 

const defaultState = {
    currentToken: "",
    isAuth: false
}

export default function tokenReducer(state = defaultState, action) {
    switch (action.type) {
		case SET_TOKEN: 
		return {
			...state, 
			currentToken: action.payload.token,
			isAuth: true
		}
		case LOGOUT: 
		return {
			...state, 
			currentToken: "",
			isAuth: false
		}
        default:
            return state
    }
}

export const setToken = token => ({type: SET_TOKEN, payload: token})
export const logout = () => ({type: LOGOUT})