import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ContactsUsers from './Components/Components1/Contacts/contacts'
import ContactRender from './Pages/ContactsRender/render'


const Contacts = ()=>{
    return(
        <>
        <Switch>
            <Route exact path='/contacts' component={ContactsUsers}/>
            <Route path='/contacts/:id'component = {ContactRender} />
        </Switch>
        </>
    )
}
export default Contacts;