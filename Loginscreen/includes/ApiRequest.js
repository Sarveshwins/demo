import axios from 'axios';
//import { BASEURL, BUSINESS_TOKEN } from "@env";
const BASEURL = 'https://www.contico.in/api/rest/';
const BUSINESS_TOKEN = '92.204.135.120';
/** function that returns an axios call */
export const request = (
  method,
  path,
  data,
  headers = {
    //source: BUSINESS_TOKEN,
    // "Content-Type": "application/json",
    'Content-Type': 'application/json-patch+json',
  },
) =>
  axios({
    url: `${BASEURL}${path}`,
    data,
    method,
    timeout: 10000,
    headers,
  });

export const authenticatedRequest = (token, path, data, method) =>
  request(method, path, data, {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json-patch+json',
    //source: BUSINESS_TOKEN,
  });
