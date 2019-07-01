import React, { Component } from 'react'
import { Card } from '../index'
import Payment from 'payment'
import './index.scss'


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
      this.setState({ ...this.state, cvv: '', rotate: false })
    }
  }

  onHandleNumber = e => {
    const charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }
    else{
       return true;
    }
  }

  render() {

    const { type, number, name, cvv, date, rotate } = this.state
  
    return (    
      <div className="container">
        <div className="form-credit-card">
          <input type="number" onChange={this.onHandleChangeNumber} placeholder="NUMBER CARD" />
          <input type="text" onChange={this.onHandleChangeName} placeholder="YOUR NAME" />
          <input type="number" onChange={this.onHandleChangeCVV} placeholder="CVV" />
        </div>
        <Card type={type} numberCard={number} rotateCard={rotate} validThru={date} nameCard={name} cvvCard={cvv} />
      </div>
    )
  }
}
