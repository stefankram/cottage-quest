import axios from 'axios';

export default async function (params = {}) {
  if (!params.ZoomLevel) throw Error('Missing ZoomLevel');
  if (!params.LatitudeMax) throw Error('Missing LatitudeMax');
  if (!params.LongitudeMax) throw Error('Missing LongitudeMax');
  if (!params.LatitudeMin) throw Error('Missing LatitudeMin');
  if (!params.LongitudeMin) throw Error('Missing LongitudeMin');

  return axios.get('/api/properties', { params });
}
