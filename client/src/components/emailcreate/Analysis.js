import React, {Component }from 'react';
const Analysis = props => {
  if(props.tone_analysis === null) {
    return (
      <div>
        No analysis
      </div>

        )
  }
  return (
      <div>
        should be analysis
        {console.log(props.tone_analysis)}
        {props.tone_analysis.sentences_tone.map(item => (
          item.tones.map(tone => (
            <p>{tone.tone_id}</p>
           ))
       ))}

      </div>
      );
};


export default Analysis
