import React, { Component } from 'react'
import { Card } from '../index'
import Payment from 'payment'

export default class App extends Component {
  state = { 
    type: '',
    number: '**** **** **** ****',
    name: 'YOUR NAME',
    cvv: ''
  }

  onHandleChangeNumber = event  => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, type: Payment.fns.cardType(event.target.value), number: event.target.value})
    } else {
      this.setState({ ...this.state, type: '', number: '**** **** **** ****' })
    }
  }

  onHandleChangeName = event => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, name: event.target.value })  
    } else {
      this.setState({ ...this.state, name: 'YOUR NAME' })
    }
    
  }
  
  onHandleChangeCVV = event => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, cvv: event.target.value })
    } else {
      this.setState({ ...this.state, cvv: '' })
    }
    
  }

  render() {

    const { type, number, name, cvv } = this.state
  
    return (    
      <div>
        <input type="text" onChange={this.onHandleChangeNumber} placeholder="cardNumber" />
        <input type="text" onChange={this.onHandleChangeName} placeholder="nameCard" />
        <input type="tel" onChange={this.onHandleChangeCVV} placeholder="CVV" maxLength="4" />
        
        <Card type={type} numberCard={number} nameCard={name} cvvCard={cvv} />
      </div>
    )
  }
}
