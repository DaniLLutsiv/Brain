import React from 'react';
import {newMessageActionCreator,onSmsChangeActionCreator} from './../../redux/MessageReducer';
import Dialogs from './DialogContainer/Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';





/*
const DialogsContainer = (props) => {

    let newSmsText = React.createRef(); 

    let NewMessage = () => {
        props.dispatch(newMessageActionCreator());
    }

    let onSmsChange = (text) => {
    	props.dispatch(onSmsChangeActionCreator(text));
    }
	return(
        <div>
		  <Dialogs newMessage={NewMessage} onSmsChange={onSmsChange} DialogData={props.DialogData} NewMessageText={props.NewMessageText}/>
        </div>	
	)
}*/

const mapStateToProps = (state) => {
    return{
       DialogData: state.DialogData.Message,
       NewMessageText: state.DialogData.NewMessageText,
    }    
}


const mapDispatchToProps = (dispatch) => {
    return{
        NewMessage: () => {
            dispatch(newMessageActionCreator());
        },
        onSmsChange: (text) => {
            dispatch(onSmsChangeActionCreator(text));
        }
    }    
}


// let withRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectComponent);

//export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

