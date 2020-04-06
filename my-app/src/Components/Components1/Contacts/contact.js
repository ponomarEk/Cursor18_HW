import React , { Component } from 'react';

import './contact.css';

class Contact extends Component{
    state={
        hidden:true
    }

    showInfo = ()=>{
        this.setState({
            hidden:!this.state.hidden
        })
    }
    
    render(){
        // let classNames = "info";
        // let hidden = this.state.hidden;
        // if(!hidden){
        //     classNames+="active"
        // }
       
        const{firstName,lastName}=this.props;
        // const getMale=()=>{
        //     if(gender==="male"){
        //         return(<i class="fas fa-mars"></i>);               
        //     }else if(gender==="female"){
        //         return(<i class="fas fa-venus"></i>);
        //     }else{
        //         return(gender)
        //     }
        // }
        return( <>
            <p className="name">
                <span>{firstName}</span> <span>{lastName}</span>
                </p>
                    {/* <ul className = {classNames} id = "h">
                        <li><span>Number:</span> {phone}</li>
                        <li><span>Gender:</span> {getMale()}
                        </li>
                    </ul> */}
            </>
        )
    }
}

export default Contact;