import React from 'react'
import '../style/allStyle.css'
import PropTypes from "prop-types";

const News = ({
                  title,
                  subtitle,
                  link,
                  img,
                  imgAlt
              }) => {

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

News.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string,
    imgAlt: PropTypes.string,
}

export default News
