import { HttpService } from "lib/services/api";
import { apiConstants } from "lib/constants";

export default class ProductCategoriesService {
  constructor() {
    this.apiEndpointURL = apiConstants.V1.PRODUCT_CATEGORIES;
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

  async get(id) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async create(data) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, data) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async destroy(id) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}
