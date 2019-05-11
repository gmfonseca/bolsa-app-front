import React, { Component } from 'react'
import Main from '../template/Main'
import TableOrdens from './components/TableOrdens';
import TableTransacoes from './components/TableTransacoes';
import InfoDate from './components/InfoDate';

const headerProps = {
    icon: 'info-circle',
    title: 'Info' 
}

const baseUrl = "https://bolsa-app-back.herokuapp.com/"
export default class InfoCrud extends Component {
    constructor(props){
        super(props)
        const query = new URLSearchParams(this.props.location.search);
        
        this.state = {
            dateTime: query.get('dateTime')
        }

        this.child = React.createRef();
        this.listInfos = this.listInfo.bind(this)
    }

    listInfo (){
        this.child.current.listInfos()
    }

    render(){
        return(
            <Main {...headerProps}>
            
                <div className="p-3 mt-3">
                    <InfoDate baseUrl="https://bolsa-app-back.herokuapp.com/info" classButton="btn btn-dark center-block" classIcon="fa fa-search" iconContent="Buscar data"/>
                </div>
                <div className="p-3 mt-3">
                    <TableOrdens baseUrl={baseUrl} date={this.state.dateTime} ref={this.child}/>
                </div>
                <div className="p-3 mt-3">
                    <TableTransacoes baseUrl={baseUrl} date={this.state.dateTime} ref={this.child}/>
                </div>
            </Main>
        )
    }
}