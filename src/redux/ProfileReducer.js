import { Api } from '../api/Api';
let initialState = {
	Message:[
	{id:1 , name:'Elon', text:'Oy , it my first post'},
	{id:2 , name:'Elon', text:')), yes'},
	{id:3 , name:'Elon', text:'ky'}],
	NewPostText:'',
	UserData:null
}

const ProfileReducer = (state = initialState, action) =>{

	switch(action.type){
		case 'NEW_POST' : 
		let addPost = {id:4,name:'Elon', text:state.NewPostText}
		return{
			...state,
			Message : [...state.Message , addPost],
			NewPostText : ''
		}
		case 'ON_POST_CHANGE': 
		return{
			...state,
			NewPostText : action.Message
		}	
		case 'SET_USER_DATA': 
		return{
			...state,
			UserData:action.data
		}	
		default:
			return state;	
	} 	
}


export const NewPostActionCreator = () => {
	return {
		type:'NEW_POST'
	}
}

export const onPostChangeActionCreator = (text) => {
	return {
		type:'ON_POST_CHANGE',
		Message: text
	}
}

export const setUserData = (data) => {
	return {
		type:'SET_USER_DATA',
		data
	}
}

export const GetProfileThunkCreator = (userId) =>{
	return (dispatch) => {
	Api.ProfileGet(userId)
            .then(response => {
                 dispatch(setUserData(response.data))
            })
	}
}

export default ProfileReducer;
