import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';




const Dialog = (props) => {
	return(
		<div className={classes.Dialog}>
			<div className={classes.name}>
				<NavLink to={"/Dialogs/"+props.id}>
					<div>{props.name}</div>
					<div>{props.sms}</div>
				</NavLink>
		  	</div>		 
        </div>	
	)
}
export default Dialog;