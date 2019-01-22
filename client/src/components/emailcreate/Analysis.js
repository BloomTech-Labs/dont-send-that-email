import React from 'react';
const Analysis = props => {
  if(props.toneAnalysis === null) {
    return (
      <div>
        <p>No analysis. Click the Analyze Button</p>
      </div>

        )
  }
  return (
      <div>
      {/* Doing two map throughs here. There's propabley a better way to do this. - Chad */}
        {props.toneAnalysis.sentences_tone.map(item => (
          item.tones.map(tone => (
            <p id={item.sentence_id}>{tone.tone_id}</p>
           ))
       ))}

      </div>
      );
};


export default Analysis
