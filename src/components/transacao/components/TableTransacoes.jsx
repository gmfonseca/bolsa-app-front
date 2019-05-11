import React from 'react'
import '../css/TableTransacoes.css'
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

export default class TableTransacoes extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
        this.listTransacoes = this.listTransacoes.bind(this)
        this.listTransacoes()
    }

    listTransacoes(){
        axios.get(this.props.baseUrl+"transacoes/").then(function(cb){
            this.setState({data : cb.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });

     };

    deleteTransacao(transacao){
        axios.delete(this.props.baseUrl+"transacoes/"+transacao.id).then(function(cb){
            NotificationManager.success('Transacao excluida com sucesso.','',2000)
            
            this.listTransacoes();
        }.bind(this)).catch(function(response){
            NotificationManager.warning(response.message,'',2000)
        });
    };

    noTransacoes(){
        if(this.state.data.length === 0)
            return <p className="text-center no-transactions">Não há nenhuma TRANSACAO cadastrada</p>
    }

    renderRows(){
        if(this.state.data.length > 0)
            return this.state.data.map(transacao=>(
                    <tr className="transaction" key={transacao.id}>
                        <td>{transacao.ativo.codigo}</td>
                        <td>{transacao.valor}</td>
                        <td>{transacao.quantidade}</td>
                        <td>{transacao.data}</td>
                        <td>{transacao.venda.corretora.nome}</td>
                        <td>{transacao.compra.corretora.nome}</td>
                    </tr>
                )
            )
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Ativo</th>
                            <th scope="col" >Valor</th>
                            <th scope="col" >Quantidade</th>
                            <th scope="col" >Data</th>
                            <th scope="col" >Vendedora</th>
                            <th scope="col" >Compradora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                {this.noTransacoes()}
                <br/>
            </div>
        )
    }

}