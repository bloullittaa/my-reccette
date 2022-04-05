import React from 'react'
import grenade from '../assets/images/grenade.jpg'

function Desserts() {
  return (
    
     <div className='dessert'>
    <img className='grenade' src='../assets/images/grenade.jpg' />  
    <h1>Grenade à l'eau de fleur d'oranger</h1>
    <ul>
      <li>1 grenade</li>
      <li>1 c. à soupe d'eau de fleur d'oranger</li>
      <li> du sucre en poudre selon goût .</li>
    </ul>  <br />  <br />
    <p>
        Éplucher la grenade, détacher les grains. <br />
  
        Mélanger l'eau de fleur d'oranger avec la grenade.  <br />
  
      Laisser reposer au moins 1 h.
  
        Décorer avec des feuilles de menthe.
    </p>
  </div>
  )
}

export default Desserts