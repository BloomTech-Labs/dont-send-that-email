import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';
class Analysis extends Component {
  constructor (props) {
    super (props);
    this.state = {
      toneAnalysis: this.props.toneAnalysis,
      analyzedTone: false,
      text: this.props.text,
    };
  }
  analyzeText = () => {
    axios
      .post ('http://localhost:5000/api/watson', {text: this.state.text})
      .then (res => {
        const toneAnalysis = {};
        for (let i = 0; i < res.data.sentences_tone.length; i++) {
          for (let j = 0; j < res.data.sentences_tone[i].tones.length; j++) {
            if (
              toneAnalysis[res.data.sentences_tone[i].tones[j].tone_id] ===
              undefined
            ) {
              toneAnalysis[res.data.sentences_tone[i].tones[j].tone_id] =
                res.data.sentences_tone[i].tones[j].score;
            } else if (
              toneAnalysis[res.data.sentences_tone[i].tones[j].tone_id] !==
              undefined
            ) {
              if (
                res.data.sentences_tone[i].tones[j].score >
                toneAnalysis[res.data.sentences_tone[i].tones[j].tone_id]
              ) {
                toneAnalysis[res.data.sentences_tone[i].tones[j].tone_id] =
                  res.data.sentences_tone[i].tones[j].score;
              }
            }
          }
        }
        const keys = Object.keys (toneAnalysis);
        const toneAnalysisArr = [];
        for (let i = 0; i < keys.length; i++) {
          toneAnalysisArr.push ({
            [keys[i]]: (toneAnalysis[keys[i]] * 100).toFixed (2) + '%',
          });
        }
        this.setState ({toneAnalysis: toneAnalysisArr, analyzedTone: true});
      })
      .catch (err => this.setState ({error: err}));
  };
  render () {
    if (this.state.analyzedTone === false) {
      return (
        <div>
          <Button
            className="ml-3 mr-3 mt-3 action-buttons"
            type="Analyze"
            onClick={this.analyzeText}
          >
            Analyze
          </Button>
          <p>No analysis. Click the Analyze Button</p>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            className="ml-3 mr-3 mt-3 action-buttons"
            type="Analyze"
            onClick={this.analyzeText}
          >
            Analyze
          </Button>
          {/* Doing two map throughs here. There's propabley a better way to do this. - Chad */}
          {this.state.toneAnalysis.map ((item, i) => (
            <p key={i}>{Object.keys (item)[0]}: {Object.values (item)[0]}</p>
          ))}
        </div>
      );
    }
  }
}
export default Analysis;
