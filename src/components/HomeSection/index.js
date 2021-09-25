import React from 'react'
import imgBackground from '../../images/frente-casa4.jpg'


export const HomeSection = () => {

    return (
        <div className='home-container' id='home'>
            
            <div className='home-background'>
                <img className='home-image-background' src={ imgBackground } alt='home-backgrond' />
            </div>    

            <div className='home-content'>

                <h1 className='home-title'>Costa del Este</h1>
                <p className='home-up-title'>Duplex para 3 y 5 personas</p>
    
            </div>
        </div>
    )
}
