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
            <Link to="/acoes">
                <i className="fa fa-list-alt"></i> Ativos
            </Link>
            <Link to="/ordens">
                <i className="fa fa-list-alt"></i> Ordens
            </Link>
            <Link to="/transacoes">
                <i className="fa fa-list-alt"></i> Transacoes
            </Link>
            <Link to="/info">
                <i className="fa fa-info-circle"></i> Info
            </Link>
        </nav>
    </aside>
)