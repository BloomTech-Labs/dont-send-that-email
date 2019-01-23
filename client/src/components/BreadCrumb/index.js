import React from "react";
import { Navbar, Breadcrumb, BreadcrumbItem } from "reactstrap";

const logoutUrl = process.env.REACT_APP_BACKEND_URL + "/auth/logout";

const Crumb = ({ crumb }) => {
  const { name, path } = crumb;
  if (path) {
    return <BreadcrumbItem><a href={path}>{name}</a></BreadcrumbItem>
  } 
  return <BreadcrumbItem active>{name}</BreadcrumbItem>
}

const BreadCrumbs = ({ crumbs }) => {
  return (
    <Navbar>
      <Breadcrumb>
        {crumbs.map((crumb, i) => <Crumb key={i} crumb={crumb} />)}
      </Breadcrumb>
      <a className="btn btn-secondary btn-signout" href={logoutUrl}>Sign Out</a>
    </Navbar>
  )
};

export default BreadCrumbs;