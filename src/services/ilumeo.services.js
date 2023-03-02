import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL_PROJECT + "";

function getHistoricPoints(code) {
  const promise = axios.get(`${BASE_URL}/historic/${code}`);
  return promise;
}

export { getHistoricPoints };
