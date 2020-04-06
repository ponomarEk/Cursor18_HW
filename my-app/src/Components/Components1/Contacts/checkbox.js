import React, { Component } from 'react';
import './checkbox.css'
class Checkbox extends Component{
    
    render(){
        const{changeMan,changeWoman,changeUnknown}=this.props;
        return(
            <div className="checkboxes">
                <div className="checkbox">
                    <input type="checkbox" onChange={changeMan} name="male" defaultChecked/>
                    <i class="fas fa-mars"></i>
                </div>
                <div className="checkbox">
                    <input type="checkbox" onChange={changeWoman} name="female" defaultChecked/>
                    <i class="fas fa-venus"></i>
                </div>
                <div className="checkbox">
                    <input type="checkbox" onChange={changeUnknown} name="unknown" defaultChecked/>
                    <span>Unknown</span>
                </div>
            </div>
        )
    }
}

export default Checkbox;