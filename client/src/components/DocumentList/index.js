import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Sidebar";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Document from "./Document";
import "../../index.css";

export default class DocumentList extends Component {
  state = {
    emails: [],
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
  }

  emailElements = () =>
    this.state.emails.map((e, i) => (
      <Document key={i} email={e} copy={this.createDocument} />
    ));

  emailCreateButton = () => (
    <Link to="/email"><button>Create Email</button></Link>
  );

  createDocument = e => {
    const newEmail = { title: "", addressee: "" };
    axios.post(process.env.REACT_APP_EMAILS_URL, newEmail, { withCredentials: true })
      .then(({ data }) => {
        if (data.err) {
          return console.log("Email creation unsuccessful");
        }
        this.fetchEmails();
      });
  };

  render() {
    return (
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
            <button>Sign Out</button>
          </Breadcrumb>
        </div>
        <div className="bodyContent">
          <Sidebar />
            {this.emailElements()}{this.emailCreateButton()}
        </div>
      </div>
    );
  }
}
