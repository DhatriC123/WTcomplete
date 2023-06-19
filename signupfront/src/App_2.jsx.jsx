
import axios from 'axios';
import React from 'react';
import './styles.css'
class Book extends React.Component {
  constructor(){
  super()
  this.state = {firstname:'', 
    lastname:'',
    email:'',
    phone:'',
   
  } 
  this.changefirstname=this.changefirstname.bind(this)
  this.changelastname=this.changelastname.bind(this)
  this.changeemail=this.changeemail.bind(this)
  this.changephone=this.changephone.bind(this)
  this.changenumberofseats=this.changenumberofseats.bind(this)
  
  this.onSubmit=this.onSubmit.bind(this)
  }
  changefirstname(event){
    this.setState({
      firstname:event.target.value
    })
  }
  changelastname(event){
    this.setState({
      lastname:event.target.value
    })
  }
  changeemail(event){
    this.setState({
      email:event.target.value
    })
  }
  changephone(event){
    this.setState({
      phone:event.target.value
    })
  }
  changenumberofseats(event){
    this.setState({
      numberofguests:event.target.value
    })
  }
 
  onSubmit(event){
    event.preventDefault()
    const booked={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phone:this.state.phone,
      numberofguests:this.state.numberofseats
     
    }
    axios.post('http://localhost:4000/app/signup',booked)
    .then(response=>console.log(response.data))
    alert("Your registartion confirmed")
    window.location='/'
  }
  
  render() { 
    return (<div className='app-container-div'>
      <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">REGISTRATION </h1>
    </div>
      <div className='form-div'>
        <form onSubmit={this.onSubmit}>
          <label for="fname">First Name </label>
          <input type="text" placeholder="First Name" id="fname"onChange={this.changefirstname} value={this.state.firstname}required/><br/>
          <label for="lname">Last Name </label>
          <input type="text" placeholder="Last Name" id="lname "onChange={this.changelastname} value={this.state.lastname}required/><br/>
          <label for="email">Email </label>
          <input type="email" placeholder="Email" id="email" onChange={this.changeemail} value={this.state.email}required/><br/>
          <label for="phone">Phone </label>
          <input type="tel" placeholder="Phone Number" id="phone" onChange={this.changephone} value={this.state.phone} pattern="[0-9]{10}"required/><br/>
          <label for="guests">Number of seats</label>
          <input type="number" id="guests"onChange={this.changenumberofseats} value={this.state.numberofseats} min='1' max='20'/><br/>
      
          <br/>
          <div className='book_custom__button'>
          <button class="btn">Book</button>
          </div>
        </form>
      </div>

    </div>);
  }
}

export default Book;