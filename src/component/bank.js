import React from 'react'
import '../style/allStyle.css'

const Bank = props => {
    const {
        bankName,
        bankLogo,
        bankLogoName,
        bankLink
    } = props

    return <div className="card bank">
                <img src= {bankLogo} alt={bankLogoName} width='80' height='80' />
                <div style={{ flexDirection: 'column', paddingLeft: 20 }}>
                    <p>{bankName}</p>
                <i className="fa fa-hand-o-right" style={{marginRight: 5}}></i>
                <a href={bankLink}>立即前往</a>
                </div>
            </div>
}

export default Bank