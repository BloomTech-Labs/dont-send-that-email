import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Sidebar";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Document from "./Document";
import "../../index.css";

export default class DocumentList extends Component {
  state = {
    emails: []
  };

  componentDidMount = async () => {
    this.fetchEmails();
  };

  fetchEmails = () => {
    axios
      .get(process.env.REACT_APP_EMAILS_URL, { withCredentials: true })
      .then(({ data }) => {
        const { emails, err } = data;
        if (emails) {
          this.setState({ emails });
        }
        if (err) {
          console.log(err);
        }
      });
  };

  emailElements = () =>
    this.state.emails.map((e, i) => (
      <Document key={i} email={e} copy={this.copyEmail(e)} />
    ));

  emailCreateButton = () => (
    <Link to="/email">
      <button>Create Email</button>
    </Link>
  );

  copyEmail = ({ title, addressee }) => e => {
    const body = { email: { title, addressee } }
    console.log(body)
    axios.post( process.env.REACT_APP_EMAILS_URL, body, { withCredentials: true })
      .then(({ data }) => {
        if (data.id) {
          this.fetchEmails();
        } else {
          console.log("Email copy operation failed.", data.err)
        }
      });
  };

  render() {
    return (
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
            <a href={process.env.REACT_APP_BACKEND_URL + "/auth/logout"}><button>Sign Out</button></a>
          </Breadcrumb>
        </div>
        <div className="bodyContent">
          <Sidebar />
          {this.emailElements()}
          {this.emailCreateButton()}
        </div>
      </div>
    );
  }
}
