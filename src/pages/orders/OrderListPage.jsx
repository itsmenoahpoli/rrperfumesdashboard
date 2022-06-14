import React from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Badge,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { FiDownloadCloud } from "react-icons/fi";
import moment from "moment";
import toast from "react-hot-toast";

import { DashboardLayout } from "components/layouts";
import { TableBuilder } from "components/tables";
import { OrdersService } from "lib/services/modules";

const _ordersService = new OrdersService();

export const OrderListPage = () => {
  const columns = React.useMemo(
    () => [
      {
        name: "Reference No.",
        selector: ({ reference_code }) => reference_code,
      },
      {
        name: "Customer",
        selector: ({ user }) => user,
        format: ({ user }) => `${user.first_name} ${user.last_name}`,
      },
      {
        name: "Shipping Address",
        selector: ({ shipping_address }) => shipping_address,
        grow: 4,
      },
      {
        name: "Payment Status",
        selector: ({ order }) => order,
        cell: ({ order_payment }) =>
          order_payment !== null ? (
            <Badge bg="success">PAID</Badge>
          ) : (
            <Badge bg="warning">PENDING</Badge>
          ),
      },
      {
        name: "Status",
        selector: ({ status }) => status,
        cell: ({ status }) => <Badge bg="primary">{status}</Badge>,
      },
      {
        name: "Date Created",
        selector: ({ created_at }) => created_at,
        format: () => moment().format("MMMM D, YYYY H:mm A"),
        grow: 2,
      },
      {
        name: "Actions",
        selector: ({ id }) => id,
        right: true,
        cell: ({ id }) => (
          <ButtonGroup>
            <Button className="btn-edit" onClick={() => handleView(id)}>
              View
            </Button>
          </ButtonGroup>
        ),
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [view, setView] = React.useState({ show: false, data: null });

  const getData = async () => {
    await _ordersService
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
  };

  const handleView = async (id) => {
    await _ordersService
      .get(id)
      .then((response) => {
        setView({ show: true, data: response.data });
      })
      .catch((err) => {
        toast("No data available");
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <h4>Orders Management</h4>

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

      <Modal
        show={view.show}
        onHide={() => setView({ show: false, data: null })}
        size="xl"
      >
        <Modal.Header>Order Details</Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <small>&mdash; Order Information</small>

              <div className="my-2">
                <small>Reference Number</small>
                <p>
                  {view.data?.reference_code} -{" "}
                  <Badge bg="primary">{view.data?.status}</Badge>
                </p>
              </div>

              <div className="my-2">
                <small>Shipping Fee</small>
                <p>₱ 200</p>
              </div>

              <div className="my-2">
                <small>Total Amount</small>
                <p>₱ {view.data?.total_amount}</p>
              </div>

              <div className="my-2">
                <small>Payment Type/Method</small>
                <p className="text-primary">
                  <u>{view.data?.payment_method}</u>
                </p>
              </div>

              <div className="my-2">
                <small>Delivery Notes</small>
                <p>{view.data?.delivery_notes}</p>
              </div>
            </Col>

            <Col md={8}>
              <small>&mdash; Customer Information</small>

              <div className="my-2">
                <small>Name</small>
                <p>
                  {view.data?.user.first_name} {view.data?.user.last_name}
                </p>
              </div>

              <div className="my-2">
                <small>Email</small>
                <p>{view.data?.user.email}</p>
              </div>

              <div className="my-2">
                <small>Address</small>
                <p>{view.data?.user.address}</p>
              </div>

              <div className="my-2">
                <small>Phone no.</small>
                <p>{view.data?.user.mobile_no}</p>
              </div>

              <small>&mdash; Card Items</small>
              <div className="my-2">
                {/* <p>{console.log(JSON.parse(view.data?.items))}</p> */}
              </div>
            </Col>
          </Row>

          <Container fluid className="mt-4">
            <div className="my-2">
              <small>Payment Status</small>
              <p>
                {view.data?.order_payment !== null ? (
                  <Badge bg="success">PAID</Badge>
                ) : (
                  <Badge bg="warning">PENDING</Badge>
                )}
              </p>

              {Boolean(view.data?.order_payment !== null) && (
                <>
                  <hr />

                  <div className="col-md-10 mx-auto">
                    <img
                      src={view.data?.order_payment.image_path}
                      alt="payment-img"
                      className="img-fluid"
                      style={{ height: "500px", width: "100%" }}
                      fluid
                    />
                  </div>
                </>
              )}
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            onClick={() => setView({ show: false, data: null })}
          >
            <small>Close</small>
          </Button>
        </Modal.Footer>
      </Modal>
    </DashboardLayout>
  );
};
