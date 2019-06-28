import React, { Component } from 'react'
import { Card } from '../index'
import Payment from 'payment'


export default class App extends Component {
  state = { 
    type: '',
    number: '**** **** **** ****',
    name: '',
    rotate: false,
    cvv: ''
  }
  
  formartCC = value => {
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    let matches = v.match(/\d{4,16}/g)
    let match = matches && matches[0] || ''
    let parts = []

    for(let i=0; i < match.length ; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if(parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
  }

  onHandleChangeNumber = event  => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, type: Payment.fns.cardType(event.target.value), number: this.formartCC(event.target.value) })
    } else {
      this.setState({ ...this.state, type: '', number: '**** **** **** ****' })
    }
  }

  onHandleChangeName = event => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, name: event.target.value })  
    } else {
      this.setState({ ...this.state, name: '' })
    }
  }
  
  onHandleChangeCVV = event => {
    if(event.target.value.length > 0) {
      this.setState({ ...this.state, rotate: true, cvv: event.target.value })
    } else {
      this.setState({ ...this.state, cvv: '' })
    }
  }

  render() {

    const { type, number, name, cvv, date } = this.state
  
    return (    
      <div>
        <input type="text" onChange={this.onHandleChangeNumber} maxLength="16" placeholder="cardNumber" />
        <input type="text" onChange={this.onHandleChangeName} placeholder="nameCard" />
        <input type="tel" onChange={this.onHandleChangeCVV} placeholder="CVV" maxLength="4" />
        
        <Card type={type} numberCard={number} validThru={date} nameCard={name} cvvCard={cvv} />
      </div>
    )
  }
}
