import React from 'react'
import '../css/TableOrdens.css'
import axios from 'axios';
// import {NotificationManager} from 'react-notifications';

export default class TableOrdens extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
        this.listInfos = this.listInfos.bind(this)
        this.listInfos()
    }

    listInfos(){
        axios.get(this.props.baseUrl + "ordens/info?dateTime=" + this.props.date).then(function(cb){
            this.setState({data : cb.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });

    };

    noInfo(){
        if(this.state.data.length === 0)
            return <p className="text-center no-info">Não há nenhuma ORDEM cadastrada na data informada</p>
    }

    renderRows(){
        if(this.state.data.length > 0)
            return this.state.data.map(info=>(
                    <tr className={info.operacao.toLowerCase()} key={info.id}>
                        <td>{info.operacao}</td>
                        <td>{info.ativo.codigo}</td>
                        <td>{info.valor}</td>
                        <td>{info.quantidade}</td>
                        <td>{info.corretora.nome}</td>
                    </tr>
                )
            )
    }

    date(){
        if(this.props.date){
            
            return ' (' + this.props.date + ')'
        }
    }

    render(){
        return(
            <div>
                <h1>Ordens {this.date()}</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Operação</th>
                            <th scope="col">Ativo</th>
                            <th scope="col" >Valor</th>
                            <th scope="col" >Quantidade</th>
                            <th scope="col" >Corretora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                {this.noInfo()}
            </div>
        )
    }

}