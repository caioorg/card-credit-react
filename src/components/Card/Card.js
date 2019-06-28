import React from 'react'
import './index.scss'

export default function Card(props) {
    const { type, numberCard, nameCard } = props
    return (
        <div className="ccr-content">
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
    )
}
