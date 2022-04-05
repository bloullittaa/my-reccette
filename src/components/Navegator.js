import React from 'react'
import Desserts from '../pages/Desserts'
import Main from '../pages/Main'
import Starter from '../pages/Starter'
import {Link} from 'react-router-dom'


function Navegator() {
  return (
    <div className='navegator-container'>
        <header>

            <nav className='nav'>
         
          <Link to="/Starter" target="_blank">Starter</Link>
        <Link to="/Main" target="_blank">Main</Link>
        <Link to="/Desserts" target="_blank">Desserts</Link>
            </nav>
              
        </header> 
    </div>

  )
}

export default Navegator