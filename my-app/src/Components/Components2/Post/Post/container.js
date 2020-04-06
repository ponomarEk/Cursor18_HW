import React from "react";

import User from './user';
import Content from './content'
import Avatar from './avatar'
import Events from './events';
import Date from './date'


import "./container.css";

function Container(){
    return(
        <div className ="container">
            <Avatar/>
            <div className="f">
                <div className = "a">
                    <User/>
                    <Date/> 
                </div>
                <Content/>
                <Events/>
            </div>
        </div>
    )
}

export default Container;