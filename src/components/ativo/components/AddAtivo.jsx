import React from 'react'
import Popup from "reactjs-popup";
import Input from "../../template/Input"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import '../../template/Input.css'

export default class FieldAdd extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        open: false,
        corretora: '',
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
      axios.post(this.props.baseUrl+'ordens/?operacao='+this.props.operacao+'&quantidade='+this.state.quantidade +'&valor='+this.state.valor+'&ativoId='+this.props.ativo+'&corretoraNome=' + this.state.corretora,{
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
        <button type="button" className={this.props.classButton} onClick={this.openModal}> <i className={this.props.classIcon}/>  {this.props.name}</button>
          <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal} >
            <div className="popup">
                <div className="header"> <h5>{this.props.ativo}</h5> </div>
                <form method="POST" id="form">
                  <div className="form-group content col-xs-4">
                      <Input type="corretora" description="Corretora" placeholder={this.props.corretora} changeState={this.changeState}></Input>
                      <Input type="quantidade" description="Quantidade" placeholder={this.props.codigo} changeState={this.changeState}></Input>
                      <Input type="valor" description="Valor" placeholder={this.props.descricao} changeState={this.changeState}></Input>
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