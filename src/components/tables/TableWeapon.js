import React from 'react';
import Weapon from '../products/weapon.js'
const TableWeapon = (props) => {
    let balance = props.balance;
    let setAccountBalance = props.setAccountBalance;
    let dataWeapon = props.dataWeapon;
    return (
        <div>
            <hr></hr>
            <h2 className="subtitulo">Skins de Armas</h2>
            <div className="products">
                {dataWeapon.length === 0 ? (
                    <div>Sin datos</div>
                ) : (
                    dataWeapon.map((element) =>
                        <Weapon
                            key={element.id}
                            element={element}
                            balance={balance}
                            setAccountBalance={setAccountBalance}
                        />)
                )}
            </div>
        </div>
    );
}
export default TableWeapon;