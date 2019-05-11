import React, { Component } from 'react'
import Main from '../template/Main'
import TableOrdens from './components/TableOrdens';

const headerProps = {
    icon: 'list-alt',
    title: 'Ordens'
}

const baseUrl = "https://bolsa-app-back.herokuapp.com/"
export default class UserCrud extends Component {
    constructor(props){
        super(props)
        this.child = React.createRef();
        this.listOrdens = this.listOrdens.bind(this)
    }

    listOrdens (){
        this.child.current.listOrdens()
    }

    render(){
        return(
            <Main {...headerProps}>
                <div className="p-3 mt-3">
                    <TableOrdens title="COMPRA" baseUrl={baseUrl} ref={this.child}/>
                </div>
                <div className="p-3 mt-3">
                    <TableOrdens title="VENDA" baseUrl={baseUrl} ref={this.child}/>
                </div>
            </Main>
        )
    }
}
