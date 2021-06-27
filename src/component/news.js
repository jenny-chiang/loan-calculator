import React from 'react'
import '../style/allStyle.css'

const News = props => {
    const {
        title,
        subtitle,
        link,
        img,
        imgAlt
    } = props

    return <div className="card directionRow alignItems" style={{flex: 1}}>
        {img && <img
            src={img}
            alt={imgAlt}
            width='70'
            height='70'
            style={{objectFit: 'scale-down', marginRight: 10}}
        />}
        <div style={{justifySelf: 'center', flex: 1}}>
            <p>{title}</p>
            {subtitle && <p>{subtitle}</p>}
            <div style={{flexDirection: 'row'}}>
                <i className="fa fa-hand-o-right" style={{marginRight: 5}}/>
                <a href={link}>資訊連結</a>
            </div>
        </div>

    </div>
}

export default News
