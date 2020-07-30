import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route} from "react-router-dom"; 
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SearchContainer from './components/Search/SearchContainer';
import Login from './components/Login/login';






const App = (props) => {
    return (
    	<BrowserRouter>
	      <div className="app-wrapper">
	          <HeaderContainer />
	          <Nav />
	          <div className="app-wrapper-content">
	          	 <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
	          	 <Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>
	          	 <Route path="/setting" render={ () => <Setting /> }/>
	          	 <Route path="/friends" render={ () => <Friends /> }/>
	          	 <Route path="/search"  render={ () => <SearchContainer /> }/>
	          	 <Route path="/login" render={ () => <Login /> }/>
	          </div>
	      </div>
	    </BrowserRouter>  
    );
}

export default App;
