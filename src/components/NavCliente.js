import React from 'react';
function Navegacion (props) {
    let {nombre} = props;
    function volver(){
        alert('Volver al Index');
    }
    function clientes(){
        alert("Ir a login de Clientes");
    }
    function trabajadores(){
        alert("Ir a login de Clientes");
    }
    return(
       <ul className="menu">
           <div className="logo" onClick={volver}>
               <span>TokenManager - Valorant Skins</span>
           </div>
           <div className="comp-menu">
                <span className="logo">Mi Usuario: {nombre.toUpperCase()}</span>
           </div>
       </ul>
    );
}
export default Navegacion;