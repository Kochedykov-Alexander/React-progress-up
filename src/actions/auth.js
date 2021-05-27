import axios from 'axios'
import {setUser} from '../reducers/userReducer'

export const auth =  () => {
	const token = localStorage.getItem('token')
    return async dispatch => {
        try {
			console.log(token);
            const response = await axios.get(`https://progress-up.herokuapp.com/v1/profile`,
                {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' +  token
					}
				}
            )
			console.log(response.data);
            dispatch(setUser(response.data))
			
        } catch (e) {
            
			
            
        }
    }
}