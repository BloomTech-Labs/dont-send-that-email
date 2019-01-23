import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';

class Document extends Component {
  navigate = () => {
    this.props.history.push(`/email/${this.props.email.id}`)
  }

  render() {
    const { title, addressee } = this.props.email;
    return(
      <Card onClick={this.navigate}>
        <CardBody>
          <CardTitle>{title}</CardTitle> 
          <CardSubtitle>{addressee}</CardSubtitle>
          <CardText>
            <button className="btn btn-secondary" onClick={this.props.copy}>Copy</button>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(Document);