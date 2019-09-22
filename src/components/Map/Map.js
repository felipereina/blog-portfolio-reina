import React from 'react';
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import RioData from "./RioData";
import Title from '../Title'



const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`

class Map extends React.Component {

    constructor() {
        super()
        this.rioData = new RioData()

        this.state = {
            favelas: [],
            filter: "All"
        }
    }

    componentDidMount() {


        this.layer = Leaflet.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

        })

        this.map = Leaflet.map('map', {
            center: [-22.9035, -43.2096],
            zoom: 11,
            zoomControl: false,
        }).addLayer(this.layer)

        this.onEachFeature = (feature, layer) => {
            layer.bindPopup(feature.properties.Nome);
        }

        this.favelas = []

        this.rioData.get().then(result => {
            this.geojsonFeature = result

            result.forEach(element => {

                if (element.properties.Nome == "Rocinha") {
                    element.properties.faccao = "Comando Vermelho"
                } else if (element.properties.Nome == "Morro do Dendê") {
                    element.properties.faccao = "Terceiro Comando"
                } else if (element.properties.Nome == "Vila do Vintém") {
                    element.properties.faccao = "Amigos dos Amigos"
                } else if (element.properties.Nome == "Rio das Pedras") {
                    element.properties.faccao = "Milícias"
                }
                this.favelas.push(element)
            });

            this.setState({ favelas: this.favelas })
            this.renderMap()

        })

    }

    renderMap = () => {
        let filtered = this.state.favelas

        this.allShapes = Leaflet.geoJSON(filtered, {
            onEachFeature: this.onEachFeature,
            style: (feature) => {
                switch (feature.properties.faccao) {
                    case 'Comando Vermelho': return { color: "#d11c08", "weight": 3, "opacity": 0.7 };
                    case 'Terceiro Comando': return { color: "#078524", "weight": 3, "opacity": 0.7 };
                    case 'Amigos dos Amigos': return { color: "#f0cc16", "weight": 3, "opacity": 0.7 };
                    case 'Milícia': return { color: "#1665f0", "weight": 3, "opacity": 0.7 };

                }
            }
        })

        this.comandoVermelho = Leaflet.geoJson(filtered, {
            onEachFeature: this.onEachFeature,
            filter: function (feature, layer) {
                return feature.properties.faccao === "Comando Vermelho";
            },
            pointToLayer: function (feature, latlng) {
                return Leaflet.marker(latlng).on('mouseover', function () {
                    this.bindPopup(feature.properties.Nome).openPopup();
                });
            },
            style: { color: "#d11c08", "weight": 3, "opacity": 0.7 }
        });

        this.terceiroComando = Leaflet.geoJson(filtered, {
            onEachFeature: this.onEachFeature,
            filter: function (feature, layer) {
                return feature.properties.faccao === "Terceiro Comando";
            },
            pointToLayer: function (feature, latlng) {
                return Leaflet.marker(latlng).on('mouseover', function () {
                    this.bindPopup(feature.properties.Nome).openPopup();
                });
            },
            style: { color: "#078524", "weight": 3, "opacity": 0.7 }

        });

        this.ADA = Leaflet.geoJson(filtered, {
            onEachFeature: this.onEachFeature,
            filter: function (feature, layer) {
                return feature.properties.faccao === "Amigos dos Amigos";
            },
            pointToLayer: function (feature, latlng) {
                return Leaflet.marker(latlng).on('mouseover', function () {
                    this.bindPopup(feature.properties.Nome).openPopup();
                });
            },
            style: { color: "#f0cc16", "weight": 3, "opacity": 0.7 }
        });

        this.milicias = Leaflet.geoJson(filtered, {
            onEachFeature: this.onEachFeature,
            filter: function (feature, layer) {
                return feature.properties.faccao === "Milícias";
            },
            pointToLayer: function (feature, latlng) {
                return Leaflet.marker(latlng).on('mouseover', function () {
                    this.bindPopup(feature.properties.Nome).openPopup();
                });
            },
            style: { color: "#1665f0", "weight": 3, "opacity": 0.7 }
        });

        this.map.addLayer(this.allShapes)

    }

    removeAllLayer = () => {
        this.map.removeLayer(this.allShapes)
        this.map.removeLayer(this.comandoVermelho)
        this.map.removeLayer(this.terceiroComando)
        this.map.removeLayer(this.ADA)
        this.map.removeLayer(this.milicias)
    }

    click = (filter) => {

        switch (filter) {
            case "All":
                this.removeAllLayer()
                this.map.addLayer(this.allShapes)
                break;
            case "Comando Vermelho":
                this.removeAllLayer()
                this.map.addLayer(this.comandoVermelho)
                break;
            case "Terceiro Comando":
                this.removeAllLayer()
                this.map.addLayer(this.terceiroComando)
                break;
            case "Amigos dos Amigos":
                this.removeAllLayer()
                this.map.addLayer(this.ADA)
                break;
            case "Milícias":
                this.removeAllLayer()
                this.map.addLayer(this.milicias)
                break;
        }
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <>
                <Title title="Favelas do Rio" subtitle="por Facção Criminosa"/>
                    <div style={{display: "flex", paddingBottom: "10px"}}>
                        <button style={{padding: "10px"}} onClick={() => this.click("All")}>Todas</button>
                        <button onClick={() => this.click("Comando Vermelho")}>Comando Vermelho</button>
                        <button onClick={() => this.click("Terceiro Comando")}>Terceiro Comando</button>
                        <button onClick={() => this.click("Amigos dos Amigos")}>Amigos dos Amigos</button>
                        <button onClick={() => this.click("Milícias")}>Milícias</button>
                    </div>
                    <div style={{display: "flex", justifyContent: "center",
            alignItems: "center"}}>               
                        <Wrapper width="1280px" height="720px" id="map" />
                    </div>
                </>
            )
        }
        return null
    }
}

export default Map