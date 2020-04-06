import React from 'react';

import "./content.css";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


const contentInfo = 
{
         content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
         image:RAY_IMAGE
}

function Content(){
    return(
        <div className="content">
            <p className="inner__text">
                {contentInfo.content}
            </p>
            <img src = {contentInfo.image} id="content__photo"/>
        </div>
    )
}

export default Content;