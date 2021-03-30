import { getData, getDataLoad } from "./getData.js";
import { showMap } from "./showMap.js";
import { paintResults } from "./paintResults.js";

const btnIp = document.querySelector("#btn-search");
btnIp.addEventListener("click", showData);

async function showData() {
  const data = await getData();
  showMap(data.latencia, data.longitud, data.zoom);
  paintResults(data);
}

function mapDefault() {
  const init = getDataLoad();
  showMap(init.latencia, init.longitud, init.zoom);
  paintResults(init);
}

mapDefault();
