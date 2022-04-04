import React from 'react'
import grenade from '../assets/images/grenade.jpg'
import navigator from '../Components/Navegator'


function App() {
  
  // Declared an array of items
  const ingredients = [
    'une grenade',
    'une cuillère à soupe de fleur d\'oranger',
    'du sucre en poudre',
    'feuille de menthe pour la déco'
  ];

/*function Dessertsinstructions(props) {
    return (
      <div>
      {props.ingredients}
          <h1>Ingrédients</h1>
      </div>
    )
  }
  <Dessertsinstructions
//ingredients = ['1 grenade'+' fleur d'oranger']array
//recette = ""
 />*/

<>
 <img className='grenade' src='../assets/images/grenade.jpg' />  
<h1>Grenade à l'eau de fleur d'oranger</h1>


</>
console.log(ingredients);
}
