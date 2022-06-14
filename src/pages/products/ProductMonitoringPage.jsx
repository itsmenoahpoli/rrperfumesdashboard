import React from "react";
import { Container, Button, Badge } from "react-bootstrap";
import { FiDownloadCloud } from "react-icons/fi";
import moment from "moment";
import toast from "react-hot-toast";

import { DashboardLayout } from "components/layouts";
import { TableBuilder } from "components/tables";
import { ProductMonitoring } from "lib/services/modules";

const _productMonitoringService = new ProductMonitoring();

export const ProductMonitoringPage = () => {
  const columns = React.useMemo(
    () => [
      {
        name: "SKU",
        selector: ({ product }) => product.sku,
      },
      {
        name: "Product",
        selector: ({ product }) => product.name,
      },
      {
        name: "Type",
        selector: ({ type }) => type,
        cell: ({ type }) => <Badge bg="info">{type}</Badge>,
      },
      {
        name: "Date Recorded",
        selector: ({ created_at }) => created_at,
        format: () => moment().format("MMMM D, YYYY H:mm A"),
        grow: 2,
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);

  const getData = async () => {
    await _productMonitoringService
      .getAll()
      .then((response) => setData(response.data))
      .catch((err) => toast.error("Failed to fetch data"));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <h4>Products Management</h4>

      <Container fluid className="mt-3">
        <Container fluid className="dt-actions-container">
          <div className="btn-container">
            <Button variant="secondary">
              <FiDownloadCloud />
              Export List
            </Button>
          </div>
        </Container>
        <TableBuilder columns={columns} data={data} />
      </Container>
    </DashboardLayout>
  );
};
