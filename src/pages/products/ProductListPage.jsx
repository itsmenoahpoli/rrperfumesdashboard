import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import {
  FiEdit2,
  FiTrash2,
  FiPlusCircle,
  FiDownloadCloud,
  FiUploadCloud,
} from "react-icons/fi";

import { DashboardLayout } from "components/layouts";
import { TableBuilder } from "components/tables";

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

  const [data] = React.useState([]);

  return (
    <DashboardLayout>
      <h4>Products Management</h4>

      <Container fluid className="mt-3">
        <Container fluid className="dt-actions-container">
          <div className="btn-container">
            <Button variant="info">
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
        </Container>
        <TableBuilder columns={columns} data={data} />
      </Container>
    </DashboardLayout>
  );
};
