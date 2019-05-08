import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'

import Logo from '../components/logo/Logo'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>

    