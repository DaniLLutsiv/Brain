import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
	return(
		<div className={classes.Friend}>
			<img src={props.img} alt="" className={classes.img}/>
			<div className={classes.name}>{props.name}</div>
		</div>
	)
}
export default Friend;