import React , { Component } from 'react';
import ContactsO from '../../Components/Components1/Contacts/contacts';
import { useParams} from 'react-router-dom';

import '../ContactsRender/render.css'

const params = new ContactsO();


export default ()=>{
    const{id}=useParams();
    return(
        <div className='information'>
            <h2>First name: {params.state.contacts[id-1].firstName}</h2>
            <h2>Last name: {params.state.contacts[id-1].lastName}</h2>
            <h2>Phone: {params.state.contacts[id-1].phone}</h2>
            <h2>Gender: {params.state.contacts[id-1].gender}</h2>
        </div>
    )
}