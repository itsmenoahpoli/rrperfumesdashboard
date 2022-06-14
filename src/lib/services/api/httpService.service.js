import axios from "axios";

import { apiConstants } from "lib/constants";

export default class HttpService {
  constructor(apiEndpointURL) {
    this.apiEndpointURL = apiEndpointURL;
  }

  http() {
    return axios.create({
      baseURL: apiConstants.BASE_URL,
    });
  }
}
