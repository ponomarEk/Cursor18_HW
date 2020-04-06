import React from 'react';
import HomePhoto from '../../Components/Components3/img/unnamed.jpg';

import '../Home/home.css'

 function Home() {
    return(
        <div className='homepage'>
            <h2>It's homepage!</h2>
            <img src={HomePhoto}/>
            
        </div>
    )
  }
  export default Home;