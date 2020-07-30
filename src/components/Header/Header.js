import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import PreLoader from '../PreLoader/PreLoader';

const Header = (props) => {
	const SeeComponent = () =>{
		if (props.isLoader.isLoader) {
        	return <PreLoader className={classes.PreLoader}/>
        }else if(props.isLoader.login){
        	return <NavLink to={'/login'} className={classes.login}>{props.isLoader.login}</NavLink>
        }else{
        	return (<NavLink to={'/login'} className={classes.login}>Login</NavLink>)
        }
	}
	return(
		<>
			<header className={classes.header}>
	            <div className={classes.header_profile}>
		            <div className={classes.header_logo}>
		            	Brain
		            </div>
		            {SeeComponent()}
	            </div>	
	        </header>
        </>
	)
}
export default Header;