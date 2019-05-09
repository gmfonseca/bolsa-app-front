import './Logo.css'
import Logo from '../../assets/imgs/bolsa.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
(
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"></img>
        </Link>
    </aside>
)