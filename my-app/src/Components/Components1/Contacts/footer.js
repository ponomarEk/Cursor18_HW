import React from 'react';
import './footer.css'

function Footer(){
    return(
        <div className = "footer">
            <div className="event_c">
                <i class="fas fa-star fa-lg" id="s1"></i>
                <span>Обрані</span>
            </div>
            <div className="event_c">
                <i class="fas fa-clock fa-lg" id="s2"></i>
                <span>Недавні</span>
            </div>
            <div className="event_c" id="blue">
                <i class="fas fa-address-book fa-lg" id="s3"></i>
                <span>Контакти</span>
            </div>
            <div className="event_c">
                <i class="fas fa-keyboard fa-lg" id="s4"></i>
                <span>Клавіші</span>
            </div>
            <div className="event_c">
                <i class="fas fa-microphone fa-lg" id="s5"></i>
                <span>Гол. пошта</span>
            </div>
        </div>

    );
}

export default Footer;