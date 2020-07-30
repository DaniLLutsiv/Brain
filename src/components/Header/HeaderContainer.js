import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import {setAuthDataAC, setAuthIsLoaderAC} from '../../redux/AuthReducer';
import { Api } from '../../api/Api';


class HeaderContainer extends React.Component {
	componentDidMount(){ 
		this.props.setAuthIsLoader(true)

        Api.MeProfile()
        .then(response => {
        	if (response.data.resultCode === 0) {
        		this.props.setAuthData(response.data.data.id,
        			response.data.data.email,
        			response.data.data.login
        			)
        	}
        this.props.setAuthIsLoader(false)
        })
    }	
    render(){
		return <Header {...this.props}/>
	}
} 

const mapStateToProps = (state) => {
	return{
		isLoader:state.AuthData
	}
}

export default connect(mapStateToProps,{setAuthData: setAuthDataAC, setAuthIsLoader: setAuthIsLoaderAC})(HeaderContainer);