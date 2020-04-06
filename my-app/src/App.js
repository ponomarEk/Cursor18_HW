import React, { Fragment } from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/home';
import Posts from './Pages/Posts/posts';
import Photos from './Pages/Photos/photos';
import Contacts from './contacts';
import Header from "./layout/Header/header";
import {HashRouter} from 'react-router-dom'

export default function App() {
  return (
    <> 
      <HashRouter basename='/'>
   <Header/>
   <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/posts' component={Posts}/>
   <Route path='/contacts' component={Contacts}/>

   <Route path='/photos' component={Photos}/>
 </Switch>
 </HashRouter>
 </>
  );
}
