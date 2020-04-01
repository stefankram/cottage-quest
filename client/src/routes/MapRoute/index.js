import React, { useState } from 'react';
import {
  Map as LeafletMap, TileLayer, Circle, Marker, Popup,
} from 'react-leaflet';
import MapData from './components/MapData';
import blueMarker from './markers/blueMarker';
import leafletToRealtor from '../../util/leafletToRealtor';
import getProperties from '../../api/getProperties';
import { MAPBOX_ACCESS_TOKEN } from '../../constants/keys';
import { HOME, BALA } from '../../constants/locations';
import './style.scss';

export default function MapRoute() {
  const [properties, setProperties] = useState([]);
  const handleMapChange = async (e) => {
    const results = await getProperties(leafletToRealtor(e.target));

    setProperties(results.data.Results);
  };

  const handleDragStart = (e) => {
    e.target.closePopup();
  };

  return (
    <>
      <section id="map__map">
        <LeafletMap
          center={BALA}
          zoom={12}
          whenReady={handleMapChange}
          onMoveEnd={handleMapChange}
          onDragStart={handleDragStart}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
            attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
          />
          <Circle center={HOME} fillColor="gray" radius={200000} />
          <Marker position={HOME} icon={blueMarker}>
            <Popup>Home</Popup>
          </Marker>
          <MapData properties={properties} />
        </LeafletMap>
      </section>
    </>
  );
}
