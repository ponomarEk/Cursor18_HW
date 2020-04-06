import React , { Component } from 'react';
import Contact from './contact'
import './contacts.css';
import Footer from './footer'
import Chekbox from './checkbox';
import {
  Link
} from "react-router-dom";

const avatar = 'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
  }, {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
  }];
  
class Contacts extends Component{
  
  state={
    value:'',
    contacts,
    man:true,
    woman:true,
    unknown:true,
    swap:false
  }
    onChange=(event)=>{
      this.setState({
        value:event.target.value
      })
    }

    changeMan=()=>{
      this.setState({
          man:!this.state.man,
          swap:true
        }
      )
    }
    changeWoman=()=>{
      this.setState({
          woman:!this.state.woman,
          swap:true

        }
      )
    }
    changeUnknown=()=>{
      this.setState({
          unknown:!this.state.unknown,
          swap:true

        }
      )
    }
    render(){
        const filter=()=>{
        let male=[];
        let female=[];
        let unknowns=[];
        if(this.state.man){
          male=this.state.contacts.filter(curr=>{
            if(curr.gender==="male"){
              return curr;
            }
          })
        } if(this.state.woman){
          female=this.state.contacts.filter(curr=>{
            if(curr.gender==="female"){
              return curr;
            }
          })
        } if(this.state.unknown){
          unknowns=this.state.contacts.filter(curr=>{
              if(!curr.gender){
                return curr;
              }
            })
        }
        return [...male,...female,...unknowns]
      }
      let r = this.state.contacts;
      if(this.state.swap){
        r = filter();
      }
      let contactsRender;
      let data;
    
        if(this.state.value===''){
          data=r;
        }else{
         data = r.filter((val) => {
           let fullName = val.firstName+' '+val.lastName;
                if(fullName.toLowerCase().indexOf(this.state.value.toLowerCase())!==-1){
                return val;
              }else if(val.phone.indexOf(this.state.value)>-1){
             return val;
           }
         })
      }
      const path ='/contacts/'
    contactsRender = data
    .sort((a,b)=>a.firstName[0]>b.firstName[0])
    .map((curr,index)=>{
        return(
            <li key= {curr.firstName+index} className="elem">
              <Link to={path+(index+1)} className='link'>
                <Contact
                    {...curr}
                />
                </Link>
               
            </li>
        )
    })
    
        return(
          <>
          <div className="container_с">
              <div className="header clearfix">
                  <span>Групи</span>
                  <i className="fas fa-plus "></i>          
              </div>
              <h1>Контакти</h1>
              <div className="search clearfix">
                  <button className="search__photo">
                      <i class="fas fa-search"></i>
                  </button>
                  <input type="search" placeholder="Search" val={this.state.value} onChange={this.onChange}/>  
              </div>
              <Chekbox changeMan={this.changeMan} changeWoman={this.changeWoman} changeUnknown={this.changeUnknown} />
              <div className="user">
                  <img src={avatar}/>
                  <div className="user_info">
                      <h2>Олександр Пономаренко</h2>
                      <p>Моя картка</p>
                  </div>
              </div>
              <nav>
                  <ul className= "elements">{contactsRender}</ul>
              </nav>
              <Footer/>
          </div>
         
          </>
        );
    }
}
export default Contacts;