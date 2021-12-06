import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import { GiBarbecue, GiWaterDrop } from "react-icons/gi";
import { FaBath, FaTv, FaWifi, FaRuler} from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

import img1 from '../../images/casa-3-personas/1.JPG'
import img2 from '../../images/casa-3-personas/2.JPG'
import img3 from '../../images/casa-3-personas/3.JPG'
import img4 from '../../images/casa-3-personas/4.JPG'
import img5 from '../../images/casa-3-personas/5.JPG'
import img6 from '../../images/casa-3-personas/6.jpg'
import img7 from '../../images/casa-3-personas/7.JPG'
import img8 from '../../images/frente-casa2.jpg'
import img9 from '../../images/frente-noche.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"


export const SmallHouse = () => {
  return (
    <>                         
        <div className='contanier casa-container' id='casa-chica'>
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
                                </Carousel>
                            </div>
                        </div>

                        <div className='col casa-column-2'>
                            <div className='casa-column-2-items-wrap'> 

                                <div className='casa-column-2-title-wrap'>
                                    <p className='casa-column-2-up-title'>Casa para 3 personas</p>                                                                               
                                </div> 

                                <div className='casa-column-2-item'>
                                    <MdAirlineSeatIndividualSuite className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>1 Dormitorio <small> (con aire)</small> </h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <FaBath className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>1 Baño</h6>
                                </div>

                                <div className='casa-column-2-item'>
                                    <FaWifi className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'> Internet WiFi</h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <FaTv className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Smart Tv</h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <FaRuler className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>70 metros cuadrados</h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <GiBarbecue className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Parrilla <small>(Espacio techado para comer afuera)</small></h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <GiWaterDrop className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Filtro de agua en toda la casa</h6>
                                </div> 

                                <div className='casa-column-2-item'>
                                    <CgSmartHomeRefrigerator className='casa-column-2-icon'/>                          
                                    <h6 className='casa-column-2-item-title'>Heladera con freezer</h6>
                                </div>   

                            </div>
                        </div>


                </div>
        </div>  

</>
  );
};
