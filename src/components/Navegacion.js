import React from 'react';
function Navegacion () {
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
               <span>TokenManager - TInnovations</span>
           </div>
           <div className="comp-menu">
                <div onClick={clientes}>Clientes</div>
                <div onClick={trabajadores}>Trabajadores</div>
           </div>
       </ul>
    );
}
export default Navegacion;