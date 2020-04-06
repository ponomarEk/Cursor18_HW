import React from 'react';

import "./user.css"

const VERIFIED_ICON = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg";
const userInfo = 
{
            name: "Anakin Skywalker",
            nickname: "@dart_vader",
            icon: VERIFIED_ICON
}

function User(){
    return(
        <div className = "info_p"> 
            
                <ul className = "user__elements">
                    <li>
                        <span id = "name">
                            {userInfo.name}
                        </span>
                        <img src = {userInfo.icon} id = "verify" />
                    </li>
                    <li>
                        <span>
                            {userInfo.nickname}
                        </span>
                    </li>
                </ul>
            </div>
        
    );
}

export default User;