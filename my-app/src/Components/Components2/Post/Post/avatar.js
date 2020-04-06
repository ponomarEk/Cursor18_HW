import React from 'react';

import "./avatar.css"

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

function Avatar(){
    return(
        <img src = {ANAKIN_IMAGE} id = "author"/>
    )
}
export default Avatar;