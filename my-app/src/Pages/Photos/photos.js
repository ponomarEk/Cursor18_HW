import React from 'react';
import Photo1 from '../../Components/Components3/img/32_1920_1200_beautypic.ru.jpg';
import Photo2 from '../../Components/Components3/img/prikolnye-kartinki-pro-leto-na-rabochij-stol-1.jpg';
import Photo3 from '../../Components/Components3/img/01e81a35e0d119aed42d2fb15ae6d7e5.jpg';


import '../Photos/photos.css'

export default function Photos() {
    return(
        <div>
            <div className='photos'>
                <img src={Photo1}/>
                <img src={Photo2}/>
                <img src={Photo3}/>
            </div>
            <div className='photos'>
                <img src={Photo2}/>
                <img src={Photo3}/>
                <img src={Photo1}/>
            </div>
           
        </div>
    )
  }