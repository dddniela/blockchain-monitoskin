import React from 'react';
import { Button } from 'reactstrap'
import {ethers} from 'ethers'

const Weapon = (props) => {
    // console.log(props)
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let { id, name, img, category, tokens } = props.element;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Necesitas "+tokens+" tokens para el canje\n Y cuentas con "+balance);
        if(balance>=tokens)
            startPayment(tokens);
        else{
            alert("Tokens no suficientes, consigue "+(balance-tokens)+" tokens más!!")
        }
    }
    const startPayment  = async(tokens)=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = "0x4Cb23584C0F80035aE4238FcC73Dc563B1B089dE"
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(tokens+'')
        });
        alert("La transaccion se llevó a cabo con la siguiente información: "+tx.hash);
    }

    return (
        <div className="sombra columna">
            <div className="nombre">{name}</div>
            <div className="cont-img-producto">
                <img src={img} className="img-prod"></img>
            </div>
            <div className="datos-producto">
                <ol>
                    <li>Categoria: {category}</li>
                    <li>Tokens Necessarios: {tokens} MTKN</li>
                </ol>
            </div>
            <Button onClick={handleSubmit} className="btn btn-success btn-canje">Canjear</Button>
        </div>
    );
}
export default Weapon;