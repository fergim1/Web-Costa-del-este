import React from "react";
import {Link} from 'react-scroll';



export const Footer = () => {


  return (
    <footer className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-links-container'>
            <Link to='casa-chica' offset={-80} className='footer-link'>3 Personas</Link>
            <Link to='casa-grande' offset={-80} className='footer-link'>5 Personas</Link>
            <Link to='ubication' offset={-80} className='footer-link'>Ubicación</Link>
            <Link to='contact' offset={-80} className='footer-link'>Contacto</Link>    
        </div>
        
        <section className='footer-social-media-section'>
            <div className='footer-social-media-wrapper'>
                <div>
                  <small className='footer-website-rights'>Desarrollo Web: Fernando Gimenez</small>
                </div>
                <div>
                  <small className='footer-website-rights'> - © Copyright {new Date().getFullYear()} -  </small>
                </div>              
            </div>
        </section>
      </div>
    </footer>
  );
};
