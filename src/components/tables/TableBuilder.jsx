import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import DataTable from "react-data-table-component";

const EmptyTableComponent = () => {
  return (
    <Container fluid className="text-center my-3">
      <small className="text-muted">NO DATA AVAILABLE</small>
    </Container>
  );
};

export const TableBuilder = (props) => {
  const { isLoading, columns, data } = props;

  return (
    <Container fluid className="table-builder-container">
      <Card className="datatable-card p-1">
        <Card.Body className="p-0">
          <DataTable
            data={data}
            columns={columns}
            progressPending={isLoading}
            noDataComponent={<EmptyTableComponent />}
            paginationIconFirstPage={<FiChevronsLeft />}
            paginationIconLastPage={<FiChevronsRight />}
            paginationIconPrev={<FiChevronLeft />}
            paginationIconNext={<FiChevronRight />}
            selectableRows
            persistTableHead
            pagination
          />
        </Card.Body>
      </Card>
    </Container>
  );
};
