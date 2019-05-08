import React, { Component } from 'react'
import Main from '../template/Main'
import TableOrdens from './components/TableOrdens';

const headerProps = {
    icon: 'list-alt',
    title: 'Ordens'
}

const baseUrl = "http://localhost:8080/"
export default class UserCrud extends Component {
    constructor(props){
        super(props)
        this.child = React.createRef();
        this.listProdutos = this.listProdutos.bind(this)
    }
    listProdutos (){
        this.child.current.listProdutos()
    }   
    render(){
        return(
            <Main {...headerProps}>
                <TableOrdens baseUrl={baseUrl} ref={this.child}/>
            </Main>
        )
    }
}