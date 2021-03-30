const KEY = "at_PAE9NUNgP4QMFoEc6r5LPiNT2b4Jm";

function buildUrl(ip) {
  return `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`;
}

function getIp() {
  return document.querySelector("#input-search").value;
}

function checkIp(ip) {
  let validate = new RegExp(
    /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/
  );
  return validate.test(ip);
}

export function getUrl() {
  const isValidate = checkIp(getIp());
  if (isValidate) {
    return buildUrl(getIp());
  } else {
    return false;
  }
}
