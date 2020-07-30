let initialState = { 
	Message:[
	{id:1 , name:'Ivan', sms:'Go to me??'},
	{id:2 , name:'Danil', sms:'How are you??'},
	{id:3 , name:'Georgiy', sms:'ky'}],
	NewMessageText:''
}

const MessageReducer = (state = initialState , action) => {

	switch(action.type){
		case 'NEW-MESSAGE' :
			let addMessage = {id:4,name:'Elon', sms: state.NewMessageText}
		return{
			...state,	
			Message : [...state.Message , addMessage],
			NewMessageText : ''
		}
		case 'ON-SMS-CHANGE' :
		return{ 
			...state,
			NewMessageText : action.Message,
		}

		default:
			return state;	
	} 	
}

export const newMessageActionCreator = () => {
	return {
		type:'NEW-MESSAGE'
	}
}

export const onSmsChangeActionCreator = (text) => {
	return {
		type:'ON-SMS-CHANGE',
		Message: text
	}
}

export default MessageReducer;