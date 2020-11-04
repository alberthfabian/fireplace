import React, { Component } from 'react';
import credential from '../../credentials';
import GoogleMaps from 'simple-react-google-maps';

export default class Maps extends Component {
  render() {
    return(
      <GoogleMaps
        apiKey={credential.mapsKey}
        style={{ height: '100%', width: '100%' }}
        zoom={14}
        center={{
          lat: 4.5692025,
          lng: -74.1207869
        }}
        markers={
          [
            {lat: 4.571411, lng: -74.122861},
            {lat: 4.569202, lng: -74.120787}
          ]
        }
      />
    )
  }
};