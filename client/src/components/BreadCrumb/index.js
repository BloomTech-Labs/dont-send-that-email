import React from "react";
import { Navbar, Breadcrumb, BreadcrumbItem } from "reactstrap";

const Crumb = ({ crumb }) => {
  const { name, path } = crumb;
  if (path) {
    return (
      <BreadcrumbItem>
        <a href={path}>{name}</a>
      </BreadcrumbItem>
    );
  }
  return <BreadcrumbItem active>{name}</BreadcrumbItem>;
};

const BreadCrumbs = ({ crumbs }) => {
  return (
    <Breadcrumb>
      {crumbs.map((crumb, i) => (
        <Crumb key={i} crumb={crumb} />
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
