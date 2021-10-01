import React from 'react'
import '../style/allStyle.css'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyle = makeStyles({
  body: {
    justifySelf: 'center',
    flex: 1,
  },
  img: {
    objectFit: 'scale-down',
    marginRight: 10,
  },
  subtitle: {
    color: '#FFA811',
    fontSize: 14,
  },
  link: {
    flexDirection: 'row',
  },
})

const News = ({ title, subtitle, link, img, imgAlt }) => {
  const classes = useStyle()
  return (
    <div className="card directionRow alignItems" style={{ flex: 1 }}>
      {img && (
        <img
          src={img}
          alt={imgAlt}
          width="70"
          height="70"
          className={classes.img}
        />
      )}
      <div className={classes.body}>
        <p>{title}</p>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        <div className={classes.link}>
          <i className="fa fa-hand-o-right" style={{ marginRight: 5 }} />
          <a href={link}>資訊連結</a>
        </div>
      </div>
    </div>
  )
}

News.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
}

export default News
