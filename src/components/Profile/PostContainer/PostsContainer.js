import React from 'react';
import Posts from './Posts/Posts';
import { NewPostActionCreator, onPostChangeActionCreator } from '../../../redux/ProfileReducer';
import { connect } from 'react-redux';




const mapStateToProps = (state) => {
    return{
        PostsData: state.PostsData.Message,
        NewPostText: state.PostsData.NewPostText,
        UserData: state.PostsData.UserData
    }    
}


const mapDispatchToProps = (dispatch) => {
    return{
        TextPostChange: (text) => { 
            dispatch(onPostChangeActionCreator(text));
        },
        NewPost: () => { 
            dispatch(NewPostActionCreator());
        }
    }    
}
// const PostsContainer = (props) => { 
  
// 	return( 
//         <StoreContext.Consumer>
//             {
//              (store) => {
//                     let NewPost = () => {
//                         store.dispatch(NewPostActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(onPostChangeActionCreator(text));
//                     }
//                     return <Posts TextPostChange={onPostChange} NewPost={NewPost} PostsData={store.getState().PostsData} NewPostText={props.NewPostText}/>
//                     }
//             }
//         <StoreContext.Consumer>
// 	)
// }


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;