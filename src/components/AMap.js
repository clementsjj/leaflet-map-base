import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

export default class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Lat-Lng of Washington Square Park in Manhattan
      lat: 40.7308,
      lng: -73.9973,
      zoom: 14
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[this.state.lat, this.state.lng]} />
      </Map>
    );
  }
}
