import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/AuthReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const LoginForm = (props) => {
	return(
		<div>
			<h1>Login</h1>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field placeholder={'login'} name={'login'} component={'input'}/>
				</div>
				<div>
					<Field placeholder={'password'} type={'password'} name={'password'} component={'input'}/>
				</div>
				
				<div>
					<Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
				</div>
				
				<div>
					<button>Login</button>
				</div>
				
			</form>
		</div>
	)
}

const LoginRexudForm = reduxForm({form:'login'})(LoginForm)

const mapStateToProps = (state) => {
    return{
      AuthData: state.AuthData
    }    
}

const Login = (props) =>{
	const onSubmit = (Data) =>{
		props.login(Data.login, Data.password, Data.rememberMe)
	}
	if (props.AuthData.id) {return <Redirect to={`/Profile`}/>}
	return <LoginRexudForm onSubmit={onSubmit}/>
}

export default connect(mapStateToProps, {login})(Login);