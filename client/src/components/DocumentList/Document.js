import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UncontrolledTooltip } from 'reactstrap';
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
    return (
      <Card onClick={this.navigate}>
        <CardBody>
          <CardTitle>
            <Row>
              <Col xl={6} lg={12} style={{ marginBottom: 3 }}>
                <Badge>Title</Badge> {title}
              </Col>
              <Col xl={6} lg={12}>
                <Badge>Addressee</Badge> {addressee}
              </Col>
              {updated !== "No versions." && (
                <Col xs={12} style={{ marginTop: 3 }}>
                  <Badge>Updated</Badge> {updated}
                </Col>
              )}
            </Row>
          </CardTitle>
          <CardText className="text-truncate">{text}</CardText>
          <Row>
            <Col xs={12}>
              <Button className="copyBtn" id="copy"
                 color="secondary"
                onClick={e => {
                  e.stopPropagation();
                  this.props.copy();
                }}
              >
                <FontAwesomeIcon icon="copy" size="2x" />
                  <UncontrolledTooltip placement="left" target="copy">
                    Copy
                  </UncontrolledTooltip>
              </Button>
             
            

              <Button className="trashBtn" id='Trash'
                color="danger"
                onClick={e => {
                  e.stopPropagation();
                  this.props.delete();
                }}
                style={{ marginLeft: 7 }}
              >
                <FontAwesomeIcon icon="trash" size="2x" />
                <UncontrolledTooltip placement="right" target="Trash">
                  Trash
                </UncontrolledTooltip>
              </Button>
           
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(Document);
