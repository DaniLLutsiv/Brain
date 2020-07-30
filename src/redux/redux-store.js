import { createStore, combineReducers, applyMiddleware } from 'redux';
import MessageReducer from './MessageReducer';
import ProfileReducer from './ProfileReducer';
import SearchReducer from './SearchReducer';
import AuthReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	DialogData: MessageReducer,
	PostsData: ProfileReducer,
	SearchData: SearchReducer,
	AuthData: AuthReducer,
	form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;