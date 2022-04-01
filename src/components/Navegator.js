import React from 'react'

function Navegator() {
  return (
    <div className='navegator-container'>
        <header>
            <nav className='nav'>
                <p className='logo'>My-Recette</p>
                <ul className='list-navegation'>
                    <li>Desserts</li>
                    <li>Main</li>
                    <li>Starters</li>
                </ul>
            </nav>
        </header> 
    </div>
  )
}

export default Navegator