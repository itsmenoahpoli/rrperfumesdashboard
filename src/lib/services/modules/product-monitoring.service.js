import { HttpService } from "lib/services/api";
import { apiConstants } from "lib/constants";

export default class ProductMonitoring {
  constructor() {
    this.apiEndpointURL = apiConstants.V1.PRODUCT_MONITORING;
    this.httpService = new HttpService(this.apiEndpointURL);
  }

  async getAll(q) {
    try {
      let response = this.httpService.http().get(this.apiEndpointURL);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
