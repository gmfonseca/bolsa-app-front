import React, { Component } from 'react'
import Main from '../template/Main'
import TableOrdens from './components/TableTransacoes';

const headerProps = {
    icon: 'list-alt',
    title: 'Ordens'
}

const baseUrl = "http://localhost:8080/"
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
                <TableOrdens baseUrl={baseUrl} ref={this.child}/>
            </Main>
        )
    }
}