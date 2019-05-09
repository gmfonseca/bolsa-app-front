import React, { Component } from 'react'
import Main from '../template/Main'
import TableTransacoes from './components/TableTransacoes';

const headerProps = {
    icon: 'list-alt',
    title: 'Transacoes'
}

const baseUrl = "http://localhost:8080/"
export default class UserCrud extends Component {
    constructor(props){
        super(props)
        this.child = React.createRef();
        this.listTransacoes = this.listTransacoes.bind(this)
    }

    listTransacoes (){
        this.child.current.listTransacoes()
    }

    render(){
        return(
            <Main {...headerProps}>
                <TableTransacoes baseUrl={baseUrl} ref={this.child}/>
            </Main>
        )
    }
}