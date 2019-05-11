import React from 'react'
import './Main.css'
import Header from '../header/Header'

export default props =>
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content container-fluid">
                {props.children}
        </main>
    </React.Fragment>