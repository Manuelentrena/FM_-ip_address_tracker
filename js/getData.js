import { getUrl } from "./createUrl.js";

const NotFound = {
  ip: "0.0.0.0",
  location: "City Not Found",
  timezone: "+00:00",
  isp: "Not Found",
  latencia: 0,
  longitud: 0,
  zoom: 3,
};

export function getData() {
  const url = getUrl();
  if (url) {
    return callAPI(url);
  }
  return getDataLoad();
}

export function getDataLoad() {
  return NotFound;
}

async function callAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return showData(result);
  } catch (error) {
    console.log(error);
  }
}

function showData(data) {
  return {
    ip: data.ip,
    location:
      data.location.city +
      ", " +
      data.location.country +
      " " +
      data.location.postalCode,
    timezone: data.location.timezone,
    isp: data.isp,
    latencia: data.location.lat,
    longitud: data.location.lng,
    zoom: 14,
  };
}
