import React from 'react'
import Desserts from '../pages/Desserts'
import Main from '../pages/Main'
import Starter from '../pages/Starter'

function Navegator() {
  return (
    <div className='navegator-container'>
        <header>

            <nav className='nav'>
                <p className='logo'>My-Recette</p>
                <ul className='list-navegation'>
                    <li><a href="../src/pages/Desserts" >Starters</a></li>
                    <li><a href="../src/pages/Desserts">Main</a></li>
                    <li><a href="../src/pages/Desserts">Desserts</a></li>
                    
                    
                </ul> 
        
            </nav>
            
        </header> 
    </div>

  )
}

export default Navegator