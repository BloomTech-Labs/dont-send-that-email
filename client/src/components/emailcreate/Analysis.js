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
        //sentence by sentence analysis for percentage
        //using an object as a hashmap in order to not make the big o runtime worse than it already is
        const toneAnalysis = {};
        //loops through sentences in response
        for (let i = 0; i < res.data.sentences_tone.length; i++) {
          //loops through the tones of the sentences in response
          for (let j = 0; j < res.data.sentences_tone[i].tones.length; j++) {
            //if tone id is not in toneAnalysis add it to toneAnalysis as key with its score as its value
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
              //if tone id is in toneAnalysis
              //if current score is higher than score for the key in toneAnalysis then update score
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
        //make keys and loop through keys to make an object for data to be displayed convert current values to %
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
          {this.state.toneAnalysis.map ((item, i) => (
            <p key={i}>{Object.keys (item)[0]}: {Object.values (item)[0]}</p>
          ))}
        </div>
      );
    }
  }
}
export default Analysis;
