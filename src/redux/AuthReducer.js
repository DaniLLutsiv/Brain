import { AuthApi } from '../api/Api';


let initialState = {
	id: null,
	email: null,
	login: null,
	isLoader:false
}

const AuthReducer = (state = initialState, action) =>{

	switch(action.type){
		case 'SET_AUTH_DATA' : 
		return{
			...state,
			...action.data
		}	
		case 'SET_AUTH_LOADER' : 
		return{
			...state,
			isLoader: action.loader
		}
		default:
			return state;	
	} 	
}

export const setAuthDataAC = (id, email, login) => {
	debugger
	return {
		type:'SET_AUTH_DATA',
		data:{id, email, login}
	}
}


export const setAuthIsLoaderAC = (loader) => {
	return {
		type:'SET_AUTH_LOADER',
		loader
	}
}

export const login = (email, password, rememberMe ) => (dispatch) =>{
	AuthApi.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				debugger
				dispatch(setAuthDataAC(response.data.data))
			}
		})
}


export const logout = () => (dispatch) =>{
	AuthApi.logout()
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthDataAC(null,null,null))
			}
		})
}

export default AuthReducer;
