import React from 'react';
function Navegacion () {
    function volver(){
        alert('Volver al Index');
    }
    function clientes(){
        alert("Ir a login");
    }
    return(
       <ul className="menu">
           <div className="logo" onClick={volver}>
               <span>TokenManager - Valorant Skins</span>
           </div>
       </ul>
    );
}
export default Navegacion;