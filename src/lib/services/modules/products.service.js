import { HttpService } from "lib/services/api";
import { apiConstants } from "lib/constants";

export default class ProductsService {
  constructor() {
    this.apiEndpointURL = apiConstants.V1.PRODUCTS;
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
      let formData = new FormData();

      formData.append("p_image", data.images[0]);

      for (let d in data) {
        formData.append(d, data[d]);
      }

      let response = this.httpService
        .http()
        .post(this.apiEndpointURL, formData);

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, data) {
    try {
      data.product_category_id = data.product_category.id;
      delete data.product_category;

      let response = this.httpService
        .http()
        .patch(this.apiEndpointURL + "/" + id, data);

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async destroy(id) {
    try {
      let response = this.httpService
        .http()
        .delete(this.apiEndpointURL + "/" + id);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
