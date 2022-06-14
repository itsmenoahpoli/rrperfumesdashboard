import React from "react";
import { Breadcrumb, Spinner } from "react-bootstrap";
import { FiHome } from "react-icons/fi";

export const AppBreadcrumb = (props) => {
  const [paths, setPaths] = React.useState([]);

  const getCurrentPath = () => {
    const { pathname } = window.location;
    let splitPaths = pathname.split("/").splice(1, 1);

    setPaths(splitPaths);
  };

  React.useEffect(() => {
    getCurrentPath();
  }, []);

  if (paths.length === 0) return <Spinner animation="border" />;

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <FiHome /> &nbsp;Home
      </Breadcrumb.Item>

      {paths.map((path, idx) => (
        <Breadcrumb.Item
          key={`breadcrumt-${path}`}
          active={Boolean(idx === paths.length - 1)}
        >
          {path}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
