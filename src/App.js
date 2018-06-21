/* global window */
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import MapGL from 'react-map-gl';


const MAPBOX_STYLE = 'mapbox://styles/mapbox/dark-v9';
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWRpdGgxMjMiLCJhIjoiY2ppb3B0emMyMGM1djNwdDk4amNkNHplaSJ9.4dC5w5D3puyii5JjiF7ZAA'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        longitude: -74,
        latitude: 40.7,
        zoom: 11,
        maxZoom: 16
      }
    };
  }

  render() {
    return (
      <div>
        <MapGL
          {...this.state.viewport}
          mapStyle={MAPBOX_STYLE}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
        </MapGL>
      </div>
    );
  }
}

export default App;