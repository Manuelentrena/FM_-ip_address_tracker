const tilesProvider = "	https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let map = null;

export function showMap(lat, log, zoom) {
  if (map !== null) {
    map.remove();
  }

  map = L.map("mapid").setView([lat, log], zoom);

  L.tileLayer(tilesProvider, {
    maxZoom: 14,
  }).addTo(map);

  let iconMarker = L.icon({
    iconUrl: "../resources/images/icon-location.svg",
    iconSize: [50, 60],
    iconAnchor: [30, 60],
  });

  L.marker([lat, log], { icon: iconMarker }).addTo(map);
}
