import axios from 'axios';
import qs from 'querystring';

const URL = 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post';
const DEFAULT_PARAMS = {
  CultureId: 1,
  ApplicationId: 1,
  PropertySearchTypeId: 1,
  ZoomLevel: '13',
  LatitudeMax: '43.74208',
  LongitudeMax: '-79.31669',
  LatitudeMin: '43.63750',
  LongitudeMin: '-79.47822',
  Sort: '1-A',
  PropertyTypeGroupID: '1',
  TransactionTypeId: '2',
  PriceMax: '1000000',
  BedRange: '3-0',
  Keywords: 'Waterfront',
  Currency: 'CAD',
  RecordsPerPage: '12',
  Version: '7.0',
  CurrentPage: '1',
};

const generateFormData = (params = {}) => qs.stringify({
  ...DEFAULT_PARAMS,
  ...params,
});

export default async function () {
  const data = generateFormData();

  return await axios({
    url: URL,
    method: 'POST',
    data,
    headers: {
      Origin: 'https://www.realtor.ca',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
