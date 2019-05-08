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
        this.listProdutos = this.listOrdens.bind(this)
        this.listOrdens()
    }

    listOrdens(){
        axios.get(this.props.baseUrl+"ordens/").then(function(cb){
            this.setState({data : cb.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });

     };

    deleteOrdem(ordem){
        axios.delete(this.props.baseUrl+"ordens/"+ordem.id).then(function(cb){
            NotificationManager.success('Ordem excluida com sucesso.','',2000)
            
            this.listProdutos();
        }.bind(this)).catch(function(response){
            NotificationManager.warning(response.message,'',2000)
        });
    };

    noOrders(){
        if(this.state.data.length === 0)
            return <p className="text-center no-orders">Não há nenhuma ORDEM cadastrada</p>
    }

    renderRows(){
        if(this.state.data.length > 0)
            return this.state.data.map(ordem=>(
                    <tr key={ordem.id}>
                        <td>{ordem.operacao}</td>
                        <td>{ordem.ativo.codigo}</td>
                        <td>{ordem.valor}</td>
                        <td>{ordem.quantidade}</td>
                        <td>{ordem.data}</td>
                        <td>{ordem.corretora.nome}</td>
                        <td className="text-center">
                        <button type="button" className="btn btn-danger d-inline ml-2" onClick={(e) => this.deleteOrdem(ordem, e)}> <i className="fa fa-trash"/></button>
                        </td>
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
                            <th scope="col">Operação</th>
                            <th scope="col">Ativo</th>
                            <th scope="col" >Valor</th>
                            <th scope="col" >Quantidade</th>
                            <th scope="col" >Data</th>
                            <th scope="col" >Corretora</th>
                            <th scope="col" className="text-center">Ações</th>
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