import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import { Redirect } from 'react-router-dom';





const Dialogs = (props) => {
	let DialogsElements = props.DialogData.map( d => <Dialog key={d.id} name={d.name} sms={d.sms} id={d.id}/>)

    let newSmsText = React.createRef(); 

   
    let NewMessage = () => {
        props.NewMessage();
    }

    let onSmsChange = () => {
    	let text = newSmsText.current.value;
    	props.onSmsChange(text);
    }
	return(
		<div className={classes.dialogs}>
			<textarea ref={newSmsText} 
				value={props.NewMessageText} onChange={onSmsChange}/>
			<button onClick={NewMessage}>Save</button>
			{DialogsElements}
        </div>	
	)
}

export default Dialogs;