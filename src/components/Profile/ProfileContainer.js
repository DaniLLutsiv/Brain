import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from './PostContainer/PostsContainer';
import {setUserData, GetProfileThunkCreator} from '../../redux/ProfileReducer';
import { connect } from 'react-redux';
import PreLoader from '../PreLoader/PreLoader';
import { withRouter, Redirect } from 'react-router-dom';
import placeholder from '../../img/placeholder.png';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPI extends React.Component {

    // constructor(props){
    //     super(props) // пишет this.что-то из пропс = props | если это всё в этом блоке это можно упустить
    // }

    componentDidMount(){
    	let userId;
    	if (!this.props.match.params.userId) {
    		userId = 7757;
    	}else{
    		userId = this.props.match.params.userId;
    	}
        this.props.GetProfileThunkCreator(userId)
    }

    render(){ // JSX
        //if (this.props.login == null) {return <Redirect to={'/login'}/>}
    	return <>
    		{ !this.props.UserData? null : 
    		<div className={classes.content}>
			  	<div className={classes.content_header}>
		            <img className={classes.content_img} alt='' src={this.props.UserData.photos.large == null ? placeholder : this.props.UserData.photos.large }/>
		            <div className={classes.content_data}>
		            	<div>Name: {this.props.UserData.fullName}</div>
		            	<div>Text: {this.props.UserData.lookingForAJobDescription}</div>
		            </div>
				</div>
	          </div>}
    		{ !this.props.UserData? <PreLoader/>: <PostsContainer />}
    	</>
    }
}

const mapStateToProps = (state) => {
    return{
      UserData: state.PostsData.UserData
    }    
}

export default compose( 
    connect(mapStateToProps,{ setUserData, GetProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileAPI)
