import React , { useState, useEffect }from 'react';
import ElementosCanje from './ElementosCanje.js'
import NavCliente from './NavCliente.js'
import BotonConexion from './BotonConexion.js';
import { useParams } from 'react-router-dom';
function Cuerpo (props) {
    let nombre;
    if(props.nombre!=="")
        nombre = props.nombre;
    else
        nombre = localStorage.getItem("nombre")
    const [accountBalance, setAccountBalance] = useState('');
    return(
        <div className="cuerpo">
            <NavCliente nombre={nombre}/>
            <BotonConexion
                setAccountBalance={setAccountBalance}
                accountBalance={accountBalance}/>
            <h2 className="titulo">¡Ve nuestros productos de Valorant!</h2>
            <ElementosCanje 
                setAccountBalance={setAccountBalance}
                accountBalance={accountBalance}
                ></ElementosCanje>
        </div>
    );
}
export default Cuerpo;