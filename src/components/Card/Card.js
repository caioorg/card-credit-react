import React from 'react'
import './index.scss'

export default function Card(props) {
    console.log(props)
    const { type, numberCard, nameCard } = props
    return (
        <div className="ccr-content">
            <div className="ccr-content__body">
                <span className="ccr-content__chip"></span>
                <div> { type } </div>
                <div> { numberCard } </div>
                <div> { nameCard } </div>
            </div>
        </div>
    )
}
