import React from 'react'
import '../css/TableOrdens.css'
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

export default class TableOrdens extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
        this.listOrdens = this.listOrdens.bind(this)
        this.listOrdens()
    }

    listOrdens(){
        axios.get(this.props.baseUrl+"ordens/" + this.props.title.toLowerCase()).then(function(cb){
            this.setState({data : cb.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });

     };

    noOrders(){
        if(this.state.data.length === 0)
            return <p className="text-center no-orders">Não há nenhuma ORDEM cadastrada</p>
    }

    renderRows(){
        if(this.state.data.length > 0)
            return this.state.data.map(ordem=>(
                    <tr className={ordem.operacao.toLowerCase()} key={ordem.id}>
                        <td>{ordem.ativo.codigo}</td>
                        <td>{ordem.valor}</td>
                        <td>{ordem.quantidade}</td>
                        <td>{ordem.data}</td>
                        <td>{ordem.corretora.nome}</td>
                    </tr>
                )
            )
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Ativo</th>
                            <th scope="col" >Valor</th>
                            <th scope="col" >Quantidade</th>
                            <th scope="col" >Data</th>
                            <th scope="col" >Corretora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                {this.noOrders()}
            </div>
        )
    }

}