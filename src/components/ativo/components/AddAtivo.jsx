import React from 'react'
import Popup from "reactjs-popup";
import Input from "./Input"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import '../css/Input.css'

export default class FieldAdd extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        open: false,
        nome: '',
        codigo: '',
        descricao: ''
      }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.changeState = this.changeState.bind(this)
      this.saveAtivo = this.saveAtivo.bind(this)
    }
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.setState({ open: false })

    }
    
    changeState(type,novoDado){
      this.setState({
          [type]: novoDado
      })
    }
    saveAtivo () {
      axios.post(this.props.baseUrl+'ativos/?nome='+this.state.nome+'&codigo='+this.state.codigo +'&descricao='+this.state.descricao,{
          // nome : this.state.nome,
          // codigo : this.state.codigo,
          // descricao : this.state.descricao
      }).then(function(callback){
          this.closeModal()  
          NotificationManager.success('Salvo com sucesso.','',2000)
          this.props.listAtivos()
      }.bind(this)).catch(function(response){
          NotificationManager.warning(response.message,'',2000)
      })
    }

    render() {
      return (
        <div className="d-inline">
        <button type="button" className={this.props.classButton} onClick={this.openModal}> <i className={this.props.classIcon}/>  {this.props.iconContent}</button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="popup">
                <div className="header"> <h5>Ativo</h5> </div>
                <form method="POST" id="form">
                  <div className="form-group content col-xs-4">
                      <Input type="nome" description="Nome" placeholder={this.props.nome} changeState={this.changeState}></Input>
                      <Input type="codigo" description="Codigo" placeholder={this.props.codigo} changeState={this.changeState}></Input>
                      <Input type="descricao" description="Descricao" placeholder={this.props.descricao} changeState={this.changeState}></Input>
                  </div>
                </form>
                <div className="actions">
                    <button type="button" className="btn btn-info left-block buttonAdd" onClick={this.saveAtivo}> Salvar </button>
                </div>
                <a className="close" onClick={this.closeModal}>
                    &times;
                </a>
            </div>
          </Popup>
        </div>
      )
    }
  }