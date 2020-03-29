import React from 'react';
import {
  Map as LeafletMap, TileLayer,
} from 'react-leaflet';
import { MAPBOX_ACCESS_TOKEN } from '../../constants/keys';
import { HOME } from '../../constants/locations';
import './style.scss';

export default function MapRoute() {
  return (
    <>
      <header id="map__header">
        TBD!
      </header>
      <section id="map__sidebar">
        TBD!
      </section>
      <section id="map__map">
        <LeafletMap center={HOME} zoom={13}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
            attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
          />
        </LeafletMap>
      </section>
    </>
  );
}
