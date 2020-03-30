import axios from 'axios';
import qs from 'querystring';

const URL = 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post';
const DEFAULT_PARAMS = {
  CultureId: 1,
  ApplicationId: 1,
  PropertySearchTypeId: 1,
  Sort: '1-A',
  PropertyTypeGroupID: '1',
  TransactionTypeId: '2',
  PriceMax: '1000000',
  PriceMin: '200000',
  BedRange: '3-0',
  Keywords: 'Waterfront',
  Currency: 'CAD',
  RecordsPerPage: '200',
  Version: '7.0',
  CurrentPage: '1',
};

const generateFormData = (params = {}) => qs.stringify({
  ...DEFAULT_PARAMS,
  ...params,
});

export default async function (params = {}) {
  const data = generateFormData(params);

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
