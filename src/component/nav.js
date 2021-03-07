import React from 'react'
import {Link} from 'react-router-dom'
import '../style/allStyle.css'

const Nav = () => {
    return (
        <nav className="mainNav">
            <h3>學貸計算機</h3>
            <ul className="navLink">
                <Link to="/" className="linkStyle"><li>計算機</li></Link>
                <Link to="/rate" className="linkStyle"><li>學貸利率資訊</li></Link>
            </ul>
        </nav>
    )
}

export default Nav