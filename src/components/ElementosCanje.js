import React from 'react';
import TableWeapon from './tables/TableWeapon.js'

let dataWeapons = [
    {
        id: 1, name: "Elderflame", img: "/img/weapons/frenzy-elderflame.png",
        category: "Frenzy", tokens: 0.005
    },
    {
        id: 2, name: "Go 2.0", img: "/img/weapons/melee-go20.png",
        category: "Melee", tokens: 0.005
    },
    {
        id: 3, name: "Oni", img: "/img/weapons/melee-oni.png",
        category: "Melee", tokens: 0.005
    },
    {
        id: 4, name: "Prime", img: "/img/weapons/melee-prime.png",
        category: "Melee", tokens: 0.005
    },
    {
        id: 5, name: "Ruinas", img: "/img/weapons/melee-ruinas.png",
        category: "Melee", tokens: 0.005
    },
    {
        id: 6, name: "Soverana", img: "/img/weapons/melee-soverana.png",
        category: "Melee", tokens: 0.005
    },
    {
        id: 7, name: "ION", img: "/img/weapons/phantom-ion.png",
        category: "Phantom", tokens: 0.005
    },
    {
        id: 8, name: "Singularity", img: "/img/weapons/phantom-singularity.png",
        category: "Phantom", tokens: 0.005
    },
    {
        id: 9, name: "Spectrum", img: "/img/weapons/phantom-spectrum.png",
        category: "Phantom", tokens: 0.005
    },
    {
        id: 10, name: "Arcane", img: "/img/weapons/sheriff-arcane.png",
        category: "Sheriff", tokens: 0.005
    },
    {
        id: 11, name: "ION", img: "/img/weapons/sheriff-ion.png",
        category: "Sheriff", tokens: 0.005
    },
    {
        id: 12, name: "Prime", img: "/img/weapons/spectre-prime.png",
        category: "Spectre", tokens: 0.005
    },
    {
        id: 13, name: "Elderflame", img: "/img/weapons/vandal-elderflame.png",
        category: "Vandal", tokens: 0.005
    },
    {
        id: 14, name: "ION", img: "/img/weapons/vandal-ion.png",
        category: "Vandal", tokens: 0.005
    },
    {
        id: 15, name: "Reaver", img: "/img/weapons/vandal-reaver.png",
        category: "Vandal", tokens: 0.005
    },
]
function ElementosCanje(props) {
    const accountBalance = props.accountBalance;
    const setAccountBalance = props.setAccountBalance;
    return (
        <div className="cont-products">
            <div class="contenido">
                <TableWeapon
                    balance={accountBalance}
                    setAccountBalance={setAccountBalance}
                    dataWeapon={dataWeapons} />
            </div>
        </div>
    );
}
export default ElementosCanje;