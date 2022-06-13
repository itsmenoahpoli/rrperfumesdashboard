import axios from "axios";

import { apiConstants } from "lib/constants";

export default class HttpService {
  constructor(apiEndpointURL) {
    this.apiEndpointURL = apiEndpointURL;
  }

  axiosInstance() {
    axios.create({
      baseURL: apiConstants.BASE_URL,
    });
  }

  async httpRequest(method, payload, queryString = "") {
    let response = await this.axiosInstance()[method](
      this.apiEndpointURL,
      payload
    );

    return response;
  }
}
