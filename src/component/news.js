import React from 'react'
import '../style/allStyle.css'

const News = props => {
    const {
        title,
        subtitle,
        link
    } = props

    return <div className="card">
                <p>{title}</p>
                {subtitle && <p>{subtitle}</p>}
                <div style={{ flexDirection: 'row' }}>
                    <i className="fa fa-hand-o-right" style={{marginRight: 5}}></i>
                    <a href={link}>資訊連結</a>
                </div>
            </div>
}

export default News