import { HttpService } from "lib/services/api";
import { apiConstants } from "lib/constants";

export default class ProductsService {
  constructor() {
    this.apiEndpointURL = "/auth";
    this.httpService = new HttpService(this.apiEndpointURL);
  }

  async login(credentials) {
    try {
      let response = this.httpService
        .http()
        .post(this.apiEndpointURL + apiConstants.V1.AUTH.LOGIN, credentials);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
