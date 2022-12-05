import React   from 'react';
import { NavLink  } from 'react-router-dom';
import '../styles/principal.css'
import Navegacion from './Navegacion.js'
import {Button,Modal,ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

class Principal extends React.Component {
    dataUsuarios =[];
    setNombre = null;
    constructor(props) {
        super(props);
        this.dataUsuarios = props.data;
        this.setNombre=props.setNombre;
    }
    state={
        abierto: false,
        usuario:''
      }
    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
      }
    usuarioModal=(x)=>{
        if(x===1)
            this.setState({usuario:'cliente'});
        else
            this.setState({usuario:'trabajador'});
    }
    handleSubmit=(e)=>{
        let nombre = document.getElementById("usuario").value;
        this.setNombre(nombre);
        let password = document.getElementById("password").value;
        let usuario = this.state.usuario;
        let found = false;
        this.dataUsuarios.forEach((el,index) => {
            if(nombre===el.nombre && password ===el.passwd && usuario ===el.estado){
                found = true;
            }
        })
        if(found){
            alert("Bienvenido "+nombre);
            localStorage.setItem('nombre', JSON.stringify(nombre));
        }
        else{
            alert("Inicio de sesión incorrecto");
            e.preventDefault();
        }
    };
    
      
    render(){
        const modalStyles={
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        return (
            <div>
                <Navegacion/>
                    <div className="principal">
                    <h1>Bienvenido al Sistema TokenManager de TInnovations</h1>
                    <hr/>
                    <p className="welcome-text">Por favor, inicia sesión antes de continuar</p>
                    <div className="btn-login-container">
                        <Button 
                            color="success" 
                            className="btn-login btn btn-info" 
                            onClick={()=>{this.abrirModal(); this.usuarioModal(1)}}>
                                Iniciar sesión como cliente</Button>
                        <Button 
                            color="success" 
                            className="btn-login btn btn-info" 
                            onClick={()=>{this.abrirModal(); this.usuarioModal(2)}}>
                            Iniciar sesión como trabajador</Button>
                    </div>
                    <Modal isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                    Iniciar Sesión
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                        <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario" /> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input type="password" id="password"/> 
                    </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary">
                            <NavLink  
                                onClick={this.handleSubmit}
                                to={`/cuerpo/`}
                                id="enviar"
                                >Iniciar Sesión</NavLink >
                        </Button>
                        <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
                </div>
            </div>
        );
    }
}
export default Principal;