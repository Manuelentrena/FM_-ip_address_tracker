export function paintResults(data) {
  const divIp = document.querySelector("#data-ip");
  const divLocation = document.querySelector("#data-location");
  const divTimezone = document.querySelector("#data-timezone");
  const divIsp = document.querySelector("#data-isp");

  divIp.textContent = data.ip;
  divLocation.textContent = data.location;
  divTimezone.textContent = data.timezone;
  divIsp.textContent = data.isp;
}
