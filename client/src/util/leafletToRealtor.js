export default function (map) {
  const bounds = map.getBounds();

  return {
    ZoomLevel: map.getZoom(),
    LatitudeMax: bounds.getNorth(),
    LatitudeMin: bounds.getSouth(),
    LongitudeMax: bounds.getEast(),
    LongitudeMin: bounds.getWest(),
  };
}
