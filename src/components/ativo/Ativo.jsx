import React, { Component } from 'react'
import Main from '../template/Main'
import TableAtivos from './components/TableAtivos';
import InfoDate from '../info/components/InfoDate';

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

                <TableAtivos baseUrl={baseUrl} ref={this.child}/>
            </Main>
        )
    }
}