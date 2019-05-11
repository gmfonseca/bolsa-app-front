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
        nome: '',
        codigo: '',
        descricao: 'eae'
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

    saveAtivo() {
      if(this.state.date && this.state.time){
        let date = this.state.date.split("-")
        let bkpDate = date[2]+":"+date[1]+":"+date[0]
        let time = this.state.time

        let dateTime = bkpDate + '-' + time
        window.location = this.props.baseUrl + '?dateTime='+dateTime
      }
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
                <div className="header"> <h5>Info</h5> </div>
                <form method="POST" id="form">
                  <div className="form-group content col-xs-4">
                      <Input type="date" description="Data" changeState={this.changeState}></Input>
                      <Input type="time" description="Horario" changeState={this.changeState}></Input>
                  </div>
                </form>
                <div className="actions">
                    <button type="button" className="btn btn-info left-block buttonAdd" onClick={this.saveAtivo}> Buscar </button>
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