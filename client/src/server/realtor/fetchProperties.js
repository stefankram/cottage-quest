import axios from 'axios';

const URL = 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post';
const DEFAULT_PARAMS = {
  ZoomLevel: '13',
  LatitudeMax: '43.74208',
  LongitudeMax: '-79.31669',
  LatitudeMin: '43.63750',
  LongitudeMin: '-79.47822',
  Sort: '1-A',
  PropertyTypeGroupID: '1',
  PropertySearchTypeId: '1',
  TransactionTypeId: '2',
  PriceMax: '1000000',
  BedRange: '3-0',
  Keywords: 'Waterfront',
  Currency: 'CAD',
  RecordsPerPage: '12',
  ApplicationId: '1',
  CultureId: '1',
  Version: '7.0',
  CurrentPage: '1',
};

function generateFormData(params = {}) {
  const formData = new FormData();
  const data = {
    ...DEFAULT_PARAMS,
    ...params,
  };

  Object.entries(data).forEach(([name, val]) => {
    formData.set(name, val);
  });

  return formData;
}

export default async function () {
  const data = generateFormData();

  const response = await axios({
    url: URL,
    method: 'POST',
    data,
    headers: {
      Origin: 'https://www.realtor.ca',
    },
  });
  console.log(response);
}
