import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={ {lat:-36.60517271318685, lng:-56.70210012488622 } }
        >
            {props.isMarkerShown && <Marker position={{ lat: -36.60517271318685, lng: -56.70210012488622}} />}
        </GoogleMap>
        

    )
}


export default withScriptjs (
    withGoogleMap (
        Map
    )
)