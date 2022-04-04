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
                    <li><a href="../src/pages/Starters" target="_blank" >Starters</a></li>
                    <li><a href="../src/pages/Main" target="_blank">Main</a></li>
                    <li><a href="../src/pages/Desserts" target="_blank">Desserts</a></li>
                    
                </ul> 
        
            </nav>
            
        </header> 
    </div>

  )
}

export default Navegator