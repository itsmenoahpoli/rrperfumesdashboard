import React from "react";
import { Container, ButtonGroup, Button, Form, Modal } from "react-bootstrap";
import {
  FiEdit2,
  FiTrash2,
  FiPlusCircle,
  FiDownloadCloud,
  FiUploadCloud,
} from "react-icons/fi";
import moment from "moment";
import toast from "react-hot-toast";

import { DashboardLayout } from "components/layouts";
import { TableBuilder } from "components/tables";
import {
  ProductsService,
  ProductCategoriesService,
} from "lib/services/modules";

const _productsService = new ProductsService();
const _productCategoriesService = new ProductCategoriesService();

export const ProductListPage = () => {
  const columns = React.useMemo(
    () => [
      {
        name: "SKU",
        selector: ({ sku }) => sku,
      },
      {
        name: "Category",
        selector: ({ product_category }) => product_category.name,
      },
      {
        name: "Name",
        selector: ({ name }) => name,
      },
      {
        name: "In Stocks",
        selector: ({ in_stocks }) => in_stocks,
      },
      {
        name: "Price",
        selector: ({ price }) => price,
        format: ({ price }) => `₱ ${price}`,
      },
      {
        name: "Status",
        selector: ({ status }) => status,
      },
      {
        name: "Date Created",
        selector: ({ created_at }) => created_at,
        format: () => moment().format("MMMM D, YYYY H:mm A"),
      },
      {
        name: "Actions",
        selector: ({ id }) => id,
        right: true,
        cell: ({ id }) => (
          <ButtonGroup>
            <Button className="btn-edit">
              <FiEdit2 />
            </Button>
            <Button className="btn-delete">
              <FiTrash2 />
            </Button>
          </ButtonGroup>
        ),
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [formModal, setFormModal] = React.useState({ show: false, data });
  const [product, setProduct] = React.useState(null);

  const getData = async () => {
    await _productsService
      .getAll()
      .then((response) => {
        if (response.data.length === 0) {
          toast("No data available");
        }

        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await _productCategoriesService
      .getAll()
      .then((response) => {
        if (response.data.length === 0) {
          toast("No data available");
        }

        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await _productsService
      .create(product)
      .then((response) => {
        toast.success("New product uploaded");

        setData([...data, response.data]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to upload product, something went wrong");
      });
  };

  const onDataSet = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <DashboardLayout>
      <h4>Products Management</h4>

      <Container fluid className="mt-3">
        <Container fluid className="dt-actions-container">
          <div className="btn-container">
            <Button
              variant="info"
              onClick={() => setFormModal({ show: true, data: null })}
            >
              <FiPlusCircle />
              Add Product
            </Button>

            <Button variant="secondary">
              <FiDownloadCloud />
              Export List
            </Button>

            <Button variant="secondary" disabled>
              <FiUploadCloud />
              Import List
            </Button>
          </div>

          <Form className="row d-none">
            <Form.Group className="form-group col-md-3">
              <Form.Select>
                <option value=""></option>
                <option value="">Men's Collection</option>
                <option value="">Female's Collection</option>
                <option value="">Featured</option>
              </Form.Select>

              <small className="text-muted">Filter by SKU</small>
            </Form.Group>

            <Form.Group className="form-group col-md-3">
              <Form.Select>
                <option value=""></option>
                <option value="">Men's Collection</option>
                <option value="">Female's Collection</option>
                <option value="">Featured</option>
              </Form.Select>

              <small className="text-muted">Filter by category</small>
            </Form.Group>

            <Form.Group className="form-group col-md-3">
              <Form.Select>
                <option value=""></option>
                <option value="">Men's Collection</option>
                <option value="">Female's Collection</option>
                <option value="">Featured</option>
              </Form.Select>

              <small className="text-muted">Filter by status</small>
            </Form.Group>

            <Form.Group className="form-group col-md-3">
              <Form.Select>
                <option value=""></option>
                <option value="">Men's Collection</option>
                <option value="">Female's Collection</option>
                <option value="">Featured</option>
              </Form.Select>

              <small className="text-muted">Filter by in-stocks</small>
            </Form.Group>
          </Form>

          <Button variant="secondary" size="sm" className="d-none">
            Apply Filter
          </Button>
        </Container>
        <TableBuilder columns={columns} data={data} />
      </Container>

      <Modal
        show={formModal.show}
        onHide={() => setFormModal({ show: false, data: null })}
        size="lg"
      >
        <Modal.Header>
          <h6>Upload Product</h6>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label>Category</Form.Label>
              <Form.Select
                onChange={(e) =>
                  onDataSet("product_category_id", e.target.value)
                }
                required
              >
                <option value="">Choose</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Product</Form.Label>
              <Form.Control
                onChange={(e) => onDataSet("name", e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>In Stocks</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => onDataSet("in_stocks", e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => onDataSet("price", e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => onDataSet("description", e.target.value)}
                as="textarea"
                rows={5}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Main Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => onDataSet("images", [e.target.files[0]])}
                accept="image/*"
                required
              />
            </Form.Group>

            <Form.Group className="form-group mt-5">
              <Button variant="info" type="submit">
                Upload
              </Button>
              <Button
                variant="danger"
                onClick={() => setFormModal({ show: false, data: null })}
              >
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </DashboardLayout>
  );
};
