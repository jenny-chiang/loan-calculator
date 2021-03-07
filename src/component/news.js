import React from 'react'
import '../style/allStyle.css'

const News = props => {
    const {
        title,
        subtitle,
        link
    } = props

    return <div className="news">
                <p>{title}</p>
                {subtitle && <p>{subtitle}</p>}
                <i class="fa fa-hand-o-right" style={{marginRight: 5}}></i>
                <a href={link}>資訊連結</a>
            </div>
}

export default News