import React, {Component }from 'react';
const Analysis = props => {
  if(props.toneAnalysis === null) {
    return (
      <div>
        No analysis
      </div>

        )
  }
  return (
      <div>
        should be analysis
        {props.toneAnalysis.sentences_tone.map(item => (
          item.tones.map(tone => (
            <p>{tone.tone_id}</p>
           ))
       ))}

      </div>
      );
};


export default Analysis
