import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'cae8ce54-aa00-48db-8744-61c3ed6f8739'
    }
})

export const Api =  {
	FollowPost(id){
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,null ,{})
	},
	FollowDelete(id){
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{})
	},
	SetUsers(activePage,pageElement){
		return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${pageElement}`,{})
	},
	ProfileGet(userId){
		return  instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
	},
	MeProfile(){
		return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
	}
}

export const AuthApi = {
	login(email = '' , password = '', rememberMe = false){
		return instance.post('https://social-network.samuraijs.com/api/1.0/auth/login', {email, password, rememberMe})
	},
	logout(){
		return instance.delete('https://social-network.samuraijs.com/api/1.0/auth/login')
	}
}