import MessageReducer from './MessageReducer';
import ProfileReducer from './ProfileReducer';

let store = {

	_state : {
		PostsData : { 
			Message:[
			{id:1 , name:'Elon', text:'Oy , it my first post'},
			{id:2 , name:'Elon', text:')), yes'},
			{id:3 , name:'Elon', text:'ky'}],
			NewPostText:''
		},
		
		DialogData : { 
			DialogData:[
			{id:1 , name:'Ivan', sms:'Go to me??'},
			{id:2 , name:'Danil', sms:'How are you??'},
			{id:3 , name:'Georgiy', sms:'ky'}],
			NewMessageText:''
		},
		FriendsData : [
			{img:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' , 
				name:'Georgiy'},
			{img:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' , 
				name:'Sveta'},
			{img:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' , 
				name:'Ilya'}
		]
	},
	getState(){
		return this._state
	},
	_callSubscriber(){

	},

	dispatch(action){
		MessageReducer(this._state.DialogData, action)
		ProfileReducer(this._state.PostsData, action)
		this._callSubscriber(this._state);
	},

	subscriber(observer) {
		this._callSubscriber = observer
	}

}


window.store = store;
export default store; 
