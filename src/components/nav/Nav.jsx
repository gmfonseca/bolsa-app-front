import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
(
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/assets">
                <i className="fa fa-list-alt"></i> Ativos
            </Link>
            <Link to="/orders">
                <i className="fa fa-list-alt"></i> Ordens
            </Link>
            <Link to="/transactions">
                <i className="fa fa-list-alt"></i> Transacoes
            </Link>
        </nav>
    </aside>
)