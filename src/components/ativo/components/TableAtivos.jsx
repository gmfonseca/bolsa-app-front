import React from 'react'
import '../css/TableAtivos.css'
import AddAtivo from './AddAtivo.jsx'
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

export default class TableAtivos extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
        this.listAtivos = this.listAtivos.bind(this)
        this.listAtivos()
    }

    listAtivos(){
        axios.get(this.props.baseUrl+"ativos/").then(function(cb){
            this.setState({data : cb.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });

     };

    comprarAtivo(ativo){
        axios.post(this.props.baseUrl+"ordens/?").then(function(cb){
            NotificationManager.success('Ativo excluido com sucesso.','',2000)
            
            this.listAtivos();
        }.bind(this)).catch(function(response){
            NotificationManager.warning(response.message,'',2000)
        });
    };

    noAssets(){
        if(this.state.data.length === 0)
            return <p className="text-center no-assets">Não há nenhum ATIVO cadastrado</p>
    }

    renderRows(){
        let baseUrl = "https://bolsa-app-back.herokuapp.com/"
        if(this.state.data.length > 0)
            return this.state.data.map(ativo=>(
                    <tr key={ativo.codigo}>
                        <td>{ativo.nome}</td>
                        <td>{ativo.codigo}</td>
                        <td>{(ativo.descricao.length > 50) ? ativo.descricao.substring(0, 47)+"..." : ativo.descricao}</td>
                        <td className="text-center">
                            <span><AddAtivo baseUrl={baseUrl} classButton="btn btn-success d-inline ml-2" operacao="COMPRA" name="Comprar" ativo={ativo.codigo}/></span>
                            <span><AddAtivo baseUrl={baseUrl} classButton="btn btn-danger d-inline ml-2" operacao="VENDA" name="Vender" ativo={ativo.codigo}/></span>
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
                            <th scope="col">Nome</th>
                            <th scope="col" >Código</th>
                            <th scope="col" >Descricao</th>
                            <th scope="col" className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                {this.noAssets()}
                <br/>
            </div>
        )
    }

}
