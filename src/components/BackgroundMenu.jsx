import React from 'react'
import Tebu from '../assets/tebu.jpg'
import '../styles/style.css'

const BackgroundMenu = () => {

  return (
    <div className="backgroundMenu" >
        <div className='menu'>
            <div className='imageContainer'>
                <img src={Tebu} alt='menu pic' height='150px'/>
            </div>

            <div className='content'>
                <h1>Art Gallery</h1>
                <div>
                    <p>
                        Esta es una galeria de arte interactiva
                    </p>
                    <p>Hecho con amor por Gangster 3213</p>
                </div>

                <div>
                    <p>Instrucciones</p>
                    <p>Flechitas</p>
                    <p>Mouse para mirar</p>
                </div>
                <div className='playButton'>
                    <button>Comenzar</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BackgroundMenu