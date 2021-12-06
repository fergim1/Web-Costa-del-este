import React from 'react'
import Map from './Map'
import { MdPlace } from "react-icons/md";

const API_KEY = 'AIzaSyBjHd88u0lhK_921tzJyrdMUQF9oD8baRc'

export const UbicationSection = () => {
    return (
        <div className='ubication-container' id='ubication'>
            <div className='container row ubication-row'>
            
                <div className=' col ubication-wrapper'>
                    <p className='ubication-up-title'>Ubicación</p>
                    <a 
                        className='ubication-link-google-maps' 
                        href='http://www.google.com/maps/place/-36.60517271318685,-56.70210012488622'
                        target='_blank' 
                        rel="noreferrer" 
                        arial-label='Abrir en Google Maps'
                    >
                        <p className='ubication-subtitle'>Para abrir en Google Maps hacer click aquí  <MdPlace className='ubication-icon'/></p>                                                  
                    </a>                             
                <div>
                    <Map
                        isMarkerShown 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`}
                        containerElement={<div className='ubication-map-border' style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        loadingElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                </div> 


            </div>  
        </div>
    )
}
