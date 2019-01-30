import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Navigation/Sidebar";
import {
  Card,
  CardBody,
  CardTitle,
  CardColumns,
  Col,
  Container,
  Row,
  Button
} from "reactstrap";
import { withRouter } from "react-router-dom";
import Document from "./Document";
import BreadCrumb from "../BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class DocumentList extends Component {
  state = {
    emails: [],
    componentState: 0
  };

  componentDidMount = async () => {
    this.fetchEmails();
  };

  fetchEmails = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/emails", {
        withCredentials: true
      })
      .then(({ data }) => {
        const { emails, err } = data;
        if (emails) {
          this.setState({ emails }, () => console.log(this.state.emails));
        }
        if (err) {
          console.log(err);
        }
      });
  };

  emailElements = () =>
    this.state.emails.map((e, i) => (
      <Document
        key={i}
        email={e}
        copy={this.copyEmail(e)}
        delete={() => this.deleteEmail(e)}
      />
    ));

  emailCreateButton = () => (
    <Card
      onClick={this.redirectToCreateEmailPage}
      style={{ width: "100%", height: 182.5 }}
    >
      <CardBody style={{ textAlign: "center" }}>
        <CardTitle style={{ marginTop: 5, marginBottom: 20 }}>
          <h3>Create New E-mail</h3>
        </CardTitle>
        <Button size="lg" color="danger">
          <FontAwesomeIcon icon="plus-circle" size="3x" />
        </Button>
      </CardBody>
    </Card>
  );

  redirectToCreateEmailPage = () => {
    if (this.props.user.subscribed === true || this.state.emails.length < 5) {
      console.log(this.props.user.subscribed);
      this.props.history.push("/email");
    } else {
      this.setState({ componentState: 1 });
    }
  };
  deleteEmail = e => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL + "/emails/"}${e.id}`, {
        withCredentials: true
      })
      .then(res => {
        if (this.state.componentState === 1) {
          this.setState({ componentState: 0 }, () => this.fetchEmails());
        } else {
          this.fetchEmails();
        }
      })
      .catch(err => console.log(err));
  };
  copyEmail = ({ title, addressee }) => e => {
    if (this.props.user.subscribed === true || this.state.emails.length < 5) {
      console.log(this.props.user.subscribed);
      const body = { email: { title, addressee } };
      console.log(body);
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "/emails", body, {
          withCredentials: true
        })
        .then(({ data }) => {
          if (data.id) {
            this.fetchEmails();
          } else {
            console.log("Email copy operation failed.", data.err);
          }
        });
    } else {
      this.setState({ componentState: 1 });
    }
  };

  emailCountAlert = () => {
    if (this.state.componentState === 1) {
      return (
        <div class="alert alert-info" role="alert">
          Free users can only have 5 emails in their dashboard, please clean up
          any unnecessary emails.
        </div>
      );
    }
    return null;
  };

  emailCards = () => {
    if (this.state.emails.length === 0) {
      return <Container fluid className="button-center"><div>{this.emailCreateButton()}</div></Container>
    }
    return (
      <Col>
        <CardColumns>
          {this.emailElements()}
          {this.emailCreateButton()}
        </CardColumns>
      </Col>
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            {this.emailCountAlert()}
          </Col>
        </Row>
        <Row>{this.emailCards()}</Row>
      </Container>
    );
  }
}
export default withRouter(DocumentList);
