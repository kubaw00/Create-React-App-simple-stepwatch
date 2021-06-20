import React, { Component } from 'react';
import SwitchButton from './SwitchButton'
import './App.css';




export default class App extends Component {
 
 state = { 
   time: 0,
   active: false
 }

 handleClick = () => {
   if(this.state.active){
      clearInterval(this.interval)
   } else {
      this.interval = setInterval(this.addSeconds, 1000)
   }

   this.setState({
      active: !this.state.active
   })

 }

 addSeconds = () => {
   this.setState({
     time: this.state.time + 1,
   })
 }
 
  render(){
   return(
      <>
      <p>{this.state.time}</p>  
      <SwitchButton click={this.handleClick} active={this.state.active}/>
      </>
   )
 }

}


