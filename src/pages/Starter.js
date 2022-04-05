import React from 'react'
import bourek from '../assets/images/bourek.jpg'

function Starter() {
  return (
    <div className='starter'>
        <img className='bourek' src='../assets/images/bourek.jpg' /> 
        <h1>Bourek à viande hachée</h1>
        <ul>
            <li>400 g de viande hachée</li>
            <li>1 oignons</li>
            <li>persil hâché</li>
            <li>une pincée de cannelle</li>
            <li>vache qui rit</li>
            <li>sel, poivre</li>
            <li>des feuilles de brick</li>
        </ul> <br/>
        <p>
            Faire revenir l'oignon haché dans une poêle avec de l'huile d'olive A
            jouter la viande hachée,  <br/>
            et séparez  la viande à l'aide d'une fourchette en bois. <br/>
            Ajouter l'oeuf cru afin de lier la farce,
            Laisser refroidir la farce. <br/>
            Étaler les feuilles de brick et farcir de viande hachée, et la vache qui rit, <br/> jusqu'à épuisement de la farce.
            Chauffer l'huile dans une poêle et cuire des 2 face jusqu’à une couleur dorée.
        </p>
    </div>
  )
}

export default Starter



