import React from 'react'

function Cards() {
  return (
    <div className='card-container'>
        <div className='card'>
            <img className='img-cards' src={require('../assets/images/cooking.jpg')} alt='plat'/> 
            <figcaption>
                <p>yummy</p>
            </figcaption>   

        </div>

    </div>
  )
}

export default Cards