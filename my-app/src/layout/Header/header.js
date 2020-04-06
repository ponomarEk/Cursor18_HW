import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './header.css'

class Header extends Component{
  render(){
    return(
        <header>

          <ul className="menu_h">

            <li>
              <Link to="/" className='link'>Home</Link>
            </li>
            <li>
              <Link to="/contacts"className='link'>Contacts</Link>
            </li>
            <li>
              <Link to="/photos" className='link'>Photos</Link>
            </li>
            <li>
              <Link to="/posts" className='link'>Posts</Link>
            </li>

          </ul>

        </header>
    )
  }
}

export default Header;