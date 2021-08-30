import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if( window.scrollY >= 80 ) {
            setScrollNav(true)
        } 
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener( 'scroll', changeNav )   
        return () => {
            window.removeEventListener( 'scroll', changeNav );

          };   
    }, [])

    return (
        <>
            <nav className={`nav ${scrollNav && 'nav-transparent'}`}>
                <div className='nav-container'>                    
                    <div className='nav-div-icon-menu' onClick={ toggle }>
                        <FaBars/>
                    </div>
                    <ul className='nav-ul'>
                        <li className='nav-li'>
                            <LinkScroll to='casa-chica'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                              3 Personas
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='casa-grande'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                5 Personas
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='ubication'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Ubicación
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='contact'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                             >
                                 Contacto
                            </LinkScroll>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
 