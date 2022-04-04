import React from 'react'

import Desserts from '../pages/Desserts.js'
import Main from '../pages/Main.js'
import Starter from '../pages/Starter.js'

function Navegator() {
  return (
    <div className='navegator-container'>
        <header>

            <nav className='nav'>
                <p className='logo'>My-Recette</p>
                <ul className='list-navegation'>
                    <li><a href="../src/pages/Starters.js" >Starters</a></li>
                    <li><a href="../src/pages/Main.js">Main</a></li>
                    <li><a href="">Desserts</a></li>
                  </ul> 
        
            </nav>
            
        </header> 
    </div>

  )
}

export default Navegator