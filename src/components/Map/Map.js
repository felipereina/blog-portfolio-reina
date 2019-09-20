import React from 'react';
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import RioData from "./RioData";


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`

class Map extends React.Component{

    constructor(){
        super()
        this.rioData = new RioData()
    }

    componentDidMount(){

        this.map = Leaflet.map('map', {
            center: [-22.9035, -43.2096],
            zoom: 11,
            zoomControl: false,
        })

        Leaflet.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

        }).addTo(this.map)

        this.rioData.get().then(result =>{
            this.geojsonFeature = result

            result.forEach(element => {
                Leaflet.geoJSON(element).addTo(this.map)
            });

    })

    }

    render(){
        if (typeof window !== 'undefined') {
        return(
            <Wrapper width="1280px" height="720px" id="map" />
        )
        }
        return null
    }
}

export default Map