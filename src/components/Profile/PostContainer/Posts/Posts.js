import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {

    let PostsElement = props.PostsData.map( d => <Post key={d.id} text={d.text} name={d.name} />)

    let newPostText = React.createRef(); 
    
    let NewPost = () => {
        props.NewPost();
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.TextPostChange(text)
    }

	return(
        <div>
    		<div>
                <div className={classes.content_Post}>Posts</div>
            </div> 
            <div>
                <textarea ref={newPostText}  
                    value={props.NewPostText} onChange={onPostChange}></textarea>
                <button onClick={NewPost} className={classes.button}>Save</button>
            </div>
            <div>
               {PostsElement}
            </div>
        </div>    
	)
}
export default Posts;