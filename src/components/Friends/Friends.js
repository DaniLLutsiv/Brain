import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';



const Friends = (props) => {

let FriendsElements = props.FriendsData.map( d => <Friend img={d.img} name={d.name}/>)

	return(
		<div className={classes.Friends}>
			{FriendsElements}
		</div>
	)
}
export default Friends;