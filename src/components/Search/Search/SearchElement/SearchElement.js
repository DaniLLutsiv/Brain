import React from 'react';
import classes from './SearchElement.module.css';
import placeholder from './../../../../img/placeholder.png';
import { NavLink } from 'react-router-dom';

const SearchElement = (props) => {
	
	let Online = (online) => {
		if(online === true){
			return 'green'		
		}else{
			return 'black'
		}
	}
	const followlocal = (followed) => {
		if (!followed) {
			return 'follow'
		}else{
			return 'unfollow'
		}
	}

//props.photo == null ? props.photo : 
	return(<>
		<NavLink to={'/profile/'+props.id}>
			<div className={classes.container}>
				<div className={classes.flex}>
					<span><img alt='' src={props.photo !== null ? props.photo : placeholder}  /></span>
					<div className={classes.block}>
						<div className={classes.name}>{props.name}</div>
						<div>{props.text}</div>	
					</div>
					<div  className={classes[Online(props.online)]}></div>
				</div>
			</div>
		</NavLink>
				<span onClick={() => props.followedAPI(props.id, props.followed)} className={classes.follow}>	
					{followlocal(props.followed)}
				</span>
			
		</>
	)
}

export default SearchElement;