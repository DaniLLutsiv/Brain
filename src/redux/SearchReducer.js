import { Api } from '../api/Api';

let initialState = { 
	users:[],
	totalCount:0	,
	activePageNumber:1,
	pageElement:10,
	loading:false
}

const SearchReducer = (state = initialState , action) => {


	switch(action.type){
		case 'FOLLOW' :
		return{
			...state,
			users: state.users.map( u => {
				if (u.id === action.id) {
					if (action.key === false) {
						return{...u, followed:true}
					}else if(action.key === true ){
						return{...u, followed:false} 
					}
				}
				return u
			})
	
		}

		case 'SET_USERS' :
		return{ 
			...state, users:[ ...action.users]
		}

		case 'SET_TOTAL_COUNT':
		return{
			...state,
			totalCount: action.total,
		}

		case 'SET_ACTIVE_PAGE_NUMBER':
		return{
			...state,
			activePageNumber: action.activePage
		}
		case 'IS_LOADING':
		return{
			...state,
			loading: action.loading
		}

		default:
			return state;	
	} 	
}



export const follow = (id, key) => {
	return {
		type:'FOLLOW',
		id,
		key
	}
}
export const SetUsers = (users) => {
	return {
		type:'SET_USERS',
		users
	}
}
export const SetTotalCount = (total) => {
	return {
		type:'SET_TOTAL_COUNT',
		total
	}
}
export const SetActivePageNumberAC = (activePage) =>{
	return{
		type:'SET_ACTIVE_PAGE_NUMBER',
		activePage
	}
}
export const IsLoading = (loading) =>{
	return{
		type:'IS_LOADING',
		loading
	}
}

export const SetUsersThunkCreator = (activePage,pageElement) =>{
	return (dispatch) => {
	Api.SetUsers(activePage,pageElement)
	    .then(response => {
	        dispatch(IsLoading(false))
	        dispatch(SetTotalCount(response.data.totalCount))
	        dispatch(SetUsers(response.data.items)) // k props пишем this!!! 
	        dispatch(SetActivePageNumberAC(activePage))
	    })

	}
}

export const FollowedPostThunkCreator = (id, key) =>{
	return (dispatch) => {
	Api.FollowPost(id)
	    .then(response => {
	        if (response.data.resultCode === 0) {
                dispatch(follow(id, key))  
            }
	    })

	}
}

export const FollowedDeleteThunkCreator = (id, key) =>{
	return (dispatch) => {	
	Api.FollowDelete(id)
	    .then(response => {
	        if (response.data.resultCode === 0) {
                dispatch(follow(id, key))  
            }
	    })

	}
}

export default SearchReducer;