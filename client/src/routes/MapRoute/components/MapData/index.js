import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import redMarker from '../../markers/redMarker';

const getPosition = (p) => [
  p.Property.Address.Latitude,
  p.Property.Address.Longitude,
];

const getRealtorLink = (p) => `https://www.realtor.ca${p.RelativeDetailsURL}`;

const getGMapsDir = (p) => `https://www.google.com/maps/dir/57+Lurgan+Drive,+North+York,+ON/${p.Property.Address.AddressText}`;

const getPhoto = (p) => p.Property.Photo[0].MedResPath;

const filterProperties = (p) => p.Property.OwnershipType !== 'Condominium'
  && !p.PublicRemarks.match(/(amenities|condo)/i)
  && !p.Property.Address.AddressText.match(/W\/A/i)
  && !p.Property.Address.AddressText.match(/ISLAND/i)
  && p.PublicRemarks.match(/south.*exposure/i);

export default function MapData({ properties }) {
  return (
    <>
      {properties.filter(filterProperties).map((p) => (
        <Marker
          key={p.MlsNumber}
          position={getPosition(p)}
          icon={redMarker}
        >
          <Popup>
            <Card variant="outlined">
              <p className="p-text p-bold">{p.Property.Address.AddressText}</p>
              <p className="p-text">{p.Property.Price}</p>
              {p.Property.Photo && (
                <CardMedia
                  className="property__image"
                  image={getPhoto(p)}
                />
              )}
              <p className="p-text">{p.PublicRemarks}</p>
            </Card>
            <a href={getRealtorLink(p)} target="_blank" rel="noopener noreferrer">Open on realtor.ca</a>
            <br />
            <a href={getGMapsDir(p)} target="_blank" rel="noopener noreferrer">Open Directions</a>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

MapData.propTypes = {
  properties: PropTypes.array.isRequired, // eslint-disable-line
};
