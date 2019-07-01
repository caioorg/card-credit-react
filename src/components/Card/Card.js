import React from 'react'
import './index.scss'

export default function Card(props) {
    console.log(props)
    const { type, numberCard, nameCard, rotateCard, cvvCard } = props
    return (
        <>
        <div className={`ccr-content ${rotateCard ? `ccr-content__is-flipped` : '' }`}>
            <div className="ccr-content__face ccr-content__face--front">
                <div className={`ccr-content__type ${type ? `ccr-content__type--${type}` : '' }`} />
                <div className="ccr-content__body">
                    <span className="ccr-content__chip"></span>
                    <div className="ccr-content__numberCard"> { numberCard } </div>
                    <div className="ccr-content__nameCard">
                        <label>YOUR NAME</label>
                        <p>{ nameCard } </p>
                    </div>
                </div>
            </div>
        
            <div className="ccr-content__face ccr-content__face--back">
                <div className="ccr-content__stripe"/>
                <div className="ccr-content__cvvCard">
                    <label>CVV</label>
                    <p>{ cvvCard }</p>
                </div>
            </div>
        </div>
        </>
    )
}
