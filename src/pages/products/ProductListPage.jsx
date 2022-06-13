import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

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

  const [data] = React.useState([
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
    {
      sku: "SKU-1LKNSFNAU",
      name: "Perfume for MEN 275ml",
      in_stocks: 32,
      price: 325,
      status: "AVAILABLE",
      product_category: {
        name: "Men's Collection",
      },
    },
  ]);

  return (
    <DashboardLayout>
      <h2>PRODUCTS</h2>

      <Container fluid className="mt-3">
        <TableBuilder columns={columns} data={data} />
      </Container>
    </DashboardLayout>
  );
};
