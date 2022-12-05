import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function BotonConexion (props){
    const setAccountBalance = props.setAccountBalance; 
    const accountBalance = props.accountBalance;
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
        };
        checkMetamaskAvailability();
      }, []);
    
      const connectWallet = async () => {
        try {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          let balance = await provider.getBalance(accounts[0]);
          let bal = ethers.utils.formatEther(balance);
          setAccountAddress(accounts[0]);
          setAccountBalance(bal);
          setIsConnected(true);
        } catch (error) {
          setIsConnected(false);
          alert("No se pudo conectar");
        }
      };
    
    return(
            <div>
                <header className="conexion-metamask">
                    {haveMetamask ? (
                    <div>
                        {isConnected ? (
                        <div className="card">
                            <div className="card-row">
                            <h3>Wallet Address = </h3>
                            <p>
                                {accountAddress.slice(0, 4)}...
                                {accountAddress.slice(38, 42)}
                            </p>
                            </div>
                            <div className="card-row">
                            <h3>Wallet Balance = </h3>
                            <p>{accountBalance}</p>
                            </div>
                        </div>
                        ) : (
                        <span className="span-connect">No hay conexion</span> 
                        )}
                        {isConnected ? (
                        <p className="info">🎉 Conectado Exitosamente</p>
                        ) : (
                        <button className="btn btn-success" onClick={connectWallet}>
                            Conectar
                        </button>
                        )}
                    </div>
                    ) : (
                    <p>Por favor, instale MetaMask</p>
                    )}
                </header>
            </div>
    );
}
export default BotonConexion;