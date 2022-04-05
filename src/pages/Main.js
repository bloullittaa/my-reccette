import React from 'react'
import pollo from '../assets/images/locrio-de-pollo.jpg'

function Main() {
  return (
    <div className='pollo'>
    <img className='pollo' src='../assets/images/locrio-de-pollo.jpg' /> 
    <h1>Locrio de pollo</h1>
    <ul>
        <li>700 grammes de riz cru</li>
        <li>8 piéces de poulet (vous pouvez inclure foie et gésier)</li>
        <li>3 CS de concentré de tomate</li>
        <li>3 CS de sauce soja</li>
        <li>1CS d'origan en poudre</li>
        <li>mélange ail, oignon, piment vert (poivron) et coriandre passé au blender</li>
        <li>1 CC de safran</li>
        <li>4 CS d'huile</li>
        <li>sel, poivre</li>
        <li>sauce piment selon vos gouts (optionnel)</li>
    </ul>
    <p>
        Faire revenir votre poulet dans les 4 CS d'huile. <br />

        Une fois bien doré, ajouter 1.5 fois le volume du riz en eau (ici 1050 grammes). <br />

        Ajouter tous les ingrédients d'assaisonnement (c'est á dire tout, sauf le riz). <br />

        Portez á ébullition.

        Une fois les premiers bouillons, ajouter le riz, Laisser cuire á plein feu, jusqu'á ce que toute l'eau se soit évaporée. <br />

        Une fois le tout sec, baisser le feu au plus bas et couvrir. Votre riz cuira á l'étouffée. <br />

        Une fois la consistance voulue obtenue, arreter la cuisson.
    </p>

    </div>
  )
}

export default Main
