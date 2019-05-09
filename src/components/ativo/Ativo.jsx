import React, { Component } from 'react'
import Main from '../template/Main'
import AddAtivo from './components/AddAtivo';
import TableAtivos from './components/TableAtivos';

const headerProps = {
    icon: 'list-alt',
    title: 'Ativos'
}

const baseUrl = "http://localhost:8080/"
export default class UserCrud extends Component {
    constructor(props){
        super(props)
        this.child = React.createRef();
        this.listAtivos = this.listAtivos.bind(this)
    }

    listAtivos (){
        this.child.current.listAtivos()
    }

    render(){
        return(
            <Main {...headerProps}>
                <AddAtivo baseUrl={baseUrl} classButton="btn btn-dark center-block" classIcon="fa fa-plus" iconContent="Novo Ativo" listAtivos={this.listAtivos}/>
                <TableAtivos baseUrl={baseUrl} ref={this.child}/>
            </Main>
        )
    }
}