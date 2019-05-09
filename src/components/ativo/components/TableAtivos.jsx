import React from 'react'
import '../css/TableAtivos.css'
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

    deleteAtivo(ativo){
        axios.delete(this.props.baseUrl+"ativos/"+ativo.codigo).then(function(cb){
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
        if(this.state.data.length > 0)
            return this.state.data.map(ativo=>(
                    <tr key={ativo.codigo}>
                        <td>{ativo.nome}</td>
                        <td>{ativo.codigo}</td>
                        <td>{ativo.descricao}</td>
                        <td className="text-center">
                        <button type="button" className="btn btn-danger d-inline ml-2" onClick={(e) => this.deleteAtivo(ativo, e)}> <i className="fa fa-trash"/></button>
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
            </div>
        )
    }

}