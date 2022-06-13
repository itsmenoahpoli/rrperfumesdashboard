import { HttpService } from "lib/services/api";
import { apiConstants } from "lib/constants";

export default class ProductsService {
  constructor() {
    this.apiEndpointURL = apiConstants.API.PRODUCTS;
    this.httpService = new HttpService(this.apiEndpointURL);
  }

  async getAll(q) {
    try {
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
