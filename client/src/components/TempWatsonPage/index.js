import ToneAnalyzer from 'watson-developer-cloud/tone-analyzer/v3';
import React, { Component } from 'react';
import './watson.css';

class WatsonDummy extends Component {
  constructor() {
    super()
      this.state  = {
        response: []
      }
  }

  componentDidMount() {
    console.log('this is the secret file', process.env.API_KEY)
  }

  render() {
    return (
      <div className={'watson-box'}>
        <p>Watson response will go here</p>
      </div>
    );
  }
}

export default WatsonDummy;
