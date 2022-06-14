import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import { AppBreadcrumb } from "components/AppBreadcrumb";
import { appRoutes } from "routes";

export const DashboardLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const SidebarNavigation = (props) => {
    const { sidebarLinks } = props;

    return (
      <Container fluid className="sidebar-container shadow-lg">
        <Container fluid className="sidebar-wrapper">
          <div className="sidebar-bg-overlay"></div>

          <Container
            fluid
            className="header-container d-flex justify-content-center align-items-center"
          >
            <h6 className="text-white mb-0">DASHBOARD PANEL</h6>
          </Container>

          <Container fluid className="link-buttons-container">
            {sidebarLinks.map((link) =>
              link.meta.sidebarItem ? (
                <Button
                  key={`sidebar-${link.meta.name}`}
                  onClick={() => navigate(link.path)}
                >
                  <span className="icon">{link.meta.icon}</span>
                  &nbsp;
                  <span className="label">{link.meta.name}</span>
                </Button>
              ) : null
            )}
          </Container>
        </Container>
      </Container>
    );
  };

  React.useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/login", {
        replace: true,
      });
    }
  }, []);

  return (
    <Container fluid className="dashboard-container">
      <SidebarNavigation sidebarLinks={appRoutes} />

      <Container fluid className="content-container">
        <Container fluid className="page-content">
          <AppBreadcrumb />
          {children}
        </Container>
      </Container>
    </Container>
  );
};
