import React from 'react'
import '../style/allStyle.css'
import PropTypes from 'prop-types';

const Bank = ({
                  bankName,
                  bankLogo,
                  bankLogoName,
                  bankLink
              }) => {

    return <div className="card bank">
        <img
            src={bankLogo}
            alt={bankLogoName}
            width='70'
            height='70'
            style={{objectFit: 'scale-down'}}
        />
        <div style={{flexDirection: 'column', paddingLeft: 20}}>
            <p>{bankName}</p>
            <i className="fa fa-hand-o-right" style={{marginRight: 5}}/>
            <a href={bankLink}>立即前往</a>
        </div>
    </div>
}

Bank.propTypes = {
    bankName: PropTypes.string,
    bankLogo: PropTypes.string,
    bankLogoName: PropTypes.string,
    bankLink: PropTypes.string,
}

export default Bank
