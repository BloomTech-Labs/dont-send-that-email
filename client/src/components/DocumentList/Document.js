import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

class Document extends Component {
  navigate = () => {
    this.props.history.push(`/email/${this.props.email.id}`);
  };

  render() {
    const { title, addressee } = this.props.email;
    return (
      <Card onClick={this.navigate}>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{addressee}</CardSubtitle>
          <CardText>
            <Row>
              <Col>
              <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.stopPropagation();
                this.props.copy();
              }}
            >
              Copy
            </button>
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.stopPropagation();
                this.props.delete();
              }}
            >
              Delete
            </button>
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(Document);
