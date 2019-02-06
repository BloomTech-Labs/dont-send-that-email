import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment-timezone";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";

class Document extends Component {
  navigate = () => {
    this.props.history.push(`/email/${this.props.email.id}`);
  };

  render() {
    let { title, addressee, updated, text } = this.props.email;
    updated = moment(updated).calendar();
<<<<<<< HEAD

=======
>>>>>>> 6c468277c58db73752bf0c12d117e5c99b6e9b0a
    return (
      <Card onClick={this.navigate} className="documentCard">
        <CardBody>
          <CardTitle>
            <Row>
              <Col xs={12} style={{ marginBottom: 3 }}>
                <Badge className="titleBadge">Title</Badge> {title}
              </Col>
              <Col xs={12}>
                <Badge className="addresseeBadge">Addressee</Badge> {addressee}
              </Col>
              {updated !== "No versions." && (
                <Col xs={12} style={{ marginTop: 3 }}>
                  <Badge className="updatedBadge">Updated</Badge> {updated}
                </Col>
              )}

              <Col
                xs={12}
                style={{ marginTop: 3, marginBottom: 3 }}
                className="text-truncate"
              >
                <Badge className="textBadge">Message</Badge> {text}
              </Col>
            </Row>
          </CardTitle>
          <Row>
            <Col xs={12}>
<<<<<<< HEAD
              <Button
                id="copy"
                color="secondary"
=======
              <Button className="copyBtn" id="copy"
                 color="secondary"
>>>>>>> 6c468277c58db73752bf0c12d117e5c99b6e9b0a
                onClick={e => {
                  e.stopPropagation();
                  this.props.copy();
                }}
              >
                <FontAwesomeIcon icon="copy" size="2x" />
                  
              </Button>
<<<<<<< HEAD
              <Button
                id="Trash"
=======
             
            

              <Button className="trashBtn" id='Trash'
>>>>>>> 6c468277c58db73752bf0c12d117e5c99b6e9b0a
                color="danger"
                onClick={e => {
                  e.stopPropagation();
                  this.props.delete();
                }}
                style={{ marginLeft: 7 }}
              >
                <FontAwesomeIcon icon="trash" size="2x" />
                
              </Button>
           
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(Document);
