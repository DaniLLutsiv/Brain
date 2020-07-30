import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
      login: state.AuthData.login
    }    
}

export const withAuthRedirect = (Component) =>{
	class RedirectComponent extends React.Component{
		render(){
			if (this.props.login === null) {
				return <Redirect to={`/login`}/> 
			}
    		return <Component {...this.props}/>
		}
	}

	let ConnectWithAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

	return ConnectWithAuthRedirectComponent;
}