import React from 'react';
import Post from '../../Components/Components2/Post/Post/index';
import '../Posts/posts.css'

export default function Posts() {
    return(
        <div class='posted'>
           <p><Post/>
           </p> 
            <Post/>
        </div>
    )
  }
  