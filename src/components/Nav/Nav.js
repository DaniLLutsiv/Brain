import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
	return(
		 <nav className={classes.nav}>
            <div className={classes.nav_a}>
              <div><NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
              <div><NavLink to="/Dialogs" activeClassName={classes.activeLink}>Masseges</NavLink></div>
              <div><NavLink to="/Friends" activeClassName={classes.activeLink}>Friends</NavLink></div>
              <div><NavLink to="/Search" activeClassName={classes.activeLink}>Search</NavLink></div>
              <div><NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink></div>
              <div><NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink></div>
              <div><NavLink to="/Setting" activeClassName={classes.activeLink}>Setting</NavLink></div>
            </div>  
         </nav>
	)
}
export default Nav;