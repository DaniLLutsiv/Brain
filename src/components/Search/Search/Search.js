import React from 'react';
import classes from './Search.module.css';
import SearchElement from './SearchElement/SearchElement';




const Search = (props) =>{
     let pages = []; 
    for (let i = 1; i <= props.pageCount; i++) {pages.push(i + ' ') }  

    const VueEl = (el) => {
        if ((Number(el)-2<=Number(props.activePage))&&(Number(el)+2>=Number(props.activePage))){
            return el ;
        } 
    }
        
    const keyCreator = (el) =>{
        if (props.SearchData[Number(el)] !== undefined) { 
            return props.SearchData[Number(el)].id + Math.random()//из-за ошибки на сервере
        }else{
            return el
        } 
    }

    const followedAPI = (id, key) =>{
        if (key === false) {
            props.FollowedPostThunkCreator(id, key)
            /*Api.FollowPost(id,key)
                .then(response => {
                debugger
                if (response.data.resultCode == 0) {
                    props.follow(id, key)  
                }
            })*/
        }
        if (key === true) {
            props.FollowedDeleteThunkCreator(id, key)
        }
    }


        
    return <div>
        <div>{  
            props.SearchData.map( d => <SearchElement
            id={d.id} 
            name={d.name}
            text={d.text}
            photo={d.photos.small} 
            userName={d.userName}
            online={d.online}
            locationCountry={d.locationCountry}
            followed={d.followed} 
            follow={props.follow} 
            key={d.id}
            followedAPI={followedAPI}/>
            )   
        }

        </div>
        <div className={classes.pageNumber}>
            {
                pages.map(el => <div onClick={ () => { props.clickNumberPage(el) }} 
                    key={keyCreator(el)}  
                    className={el == props.activePage ? classes.active : classes.noActive}
                    >{VueEl(el)}{ VueEl(el)?<div> &nbsp;</div>:null}</div>)
            }
        </div>
    </div>
}



export default Search;