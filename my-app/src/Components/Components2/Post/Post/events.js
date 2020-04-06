import React from 'react';

import './events.css';

let comments = 482;
let shares = 146;
let likes = 887;

function Events(){
    return (
        <div className="events">
          <div className="event">
              <i className="far fa-comment-alt icon fa-lg"></i>
              <span>{comments}</span>
          </div>
            <div className="event">
                <i className="fas fa-retweet icon fa-lg"></i>
                <span>{shares}</span>
            </div>
            <div className="event">
                <i className="far fa-heart icon fa-lg"></i>
                <span>{likes}</span>
            </div>
            <div className="event">
                <i className="fas fa-upload icon fa-lg"></i>
            </div>
        </div>
    )
  };

  export default Events;