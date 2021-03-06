import React from "react";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';


export const Sidebar = ({ open, toggle }) => {
  return (
    <aside 
      className={`sidebar-container ${open && 'sidebar-container-is-open'}`}
      open={ open } 
      onClick={ toggle }
    >
      <div className='sidebar-wrapper-icon-close' onClick={ toggle }>
        <FaTimes className='sidebar-icon-close' />
      </div>
      <div className='sidebar-wrapper'>
          <ul className='sidebar-menu-ul'>
            
            <LinkScroll to="casa-grande" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              5 Personas
            </LinkScroll>
            
            <LinkScroll to="casa-chica" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              3 Personas
            </LinkScroll>

            
            <LinkScroll to="ubication" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Ubicación
            </LinkScroll>

            <LinkScroll to="contact" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-10}
            >
              Contacto
            </LinkScroll>

          </ul> 
     
      </div>
    </aside>
  );
};
