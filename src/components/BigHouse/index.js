import React from "react";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import { GiBarbecue, GiWaterDrop } from "react-icons/gi";
import { FaBath, FaTv, FaWifi, FaRuler} from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/casa-5-personas/1.jpg'
import img2 from '../../images/casa-5-personas/2.jpg'
import img3 from '../../images/casa-5-personas/3.jpg'
import img4 from '../../images/casa-5-personas/4.jpg'
import img5 from '../../images/casa-5-personas/5.jpg'
import img6 from '../../images/casa-5-personas/6.jpg'
import img7 from '../../images/casa-5-personas/7.jpg'
import img8 from '../../images/casa-5-personas/8.jpg'
import img9 from '../../images/casa-5-personas/9.jpg'
import img10 from '../../images/casa-5-personas/10.jpg'
import img11 from '../../images/frente-casa2.jpg'
import img12 from '../../images/frente-noche.jpg'

export const BigHouse = () => {
  return (
    <>                         
        <div className='contanier casa-container casa-grande' id='casa-grande'>
                <div className='row casa-row'>

                        <div className='col casa-column-1'>
                            <div className='casa-column-1-wrapper '>
                                <Carousel
                                    infiniteLoop='true'
                                    showThumbs='false'
                                >
                                    <div>
                                        <img src={img1} alt='imagen-1'/>
                                    </div>
                                    <div>
                                        <img src={img2}  alt='imagen-2'/>
                                    </div>
                                    <div>
                                        <img src={img3}   alt='imagen-3'/>
                                    </div>
                                    <div>
                                        <img src={img4}   alt='imagen-4'/>
                                    </div>
                                    <div>
                                        <img src={img5}   alt='imagen-5'/>
                                    </div>
                                    <div>
                                        <img src={img6}   alt='imagen-6'/>
                                    </div>
                                    <div>
                                        <img src={img7}   alt='imagen-7'/>
                                    </div>
                                    <div>
                                        <img src={img8}   alt='imagen-8'/>
                                    </div>
                                    <div>
                                        <img src={img9}   alt='imagen-9'/>
                                    </div>
                                    <div>
                                        <img src={img10}   alt='imagen-10'/>
                                    </div>
                                    <div>
                                        <img src={img11}   alt='imagen-11'/>
                                    </div>
                                    <div>
                                        <img src={img12}   alt='imagen-12'/>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className='col casa-column-2'>
                            <div className='casa-column-2-items-wrap'> 

                                <div className='casa-column-2-title-wrap'>
                                    <p className='casa-column-2-up-title'>Casa para 5 personas</p>                                                                               
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <MdAirlineSeatIndividualSuite className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>2 Dormitorios <small> (con aire)</small> </h6>
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <FaBath className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>2 Baños</h6>
                                </div>

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <FaWifi className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'> Internet WiFi</h6>
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <FaTv className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Smart Tv</h6>
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <FaRuler className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>200 metros cuadrados</h6>
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <GiBarbecue className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Parrilla <small>(Espacio techado para comer afuera)</small></h6>
                                </div> 

                                <div className='casa-column-2-item casa-grande-font-color'>
                                    <GiWaterDrop className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Filtro de agua en toda la casa</h6>
                                </div> 

                            </div>
                        </div>


                </div>
        </div>  

</>
  );
};
