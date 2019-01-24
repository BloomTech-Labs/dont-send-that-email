import React from 'react';

const Analysis = (props) => {
  if (
    props.toneAnalysis === null ||
    props.toneAnalysis.document_tone.tones.length === 0
  ) {
    return (
      <div>
        <p>No analysis. Click the Analyze Button</p>
      </div>
    );
  } else {
    return (
      <div>
        {props.toneAnalysis.document_tone.tones.map((e, i) => {
          return (
            <p key={i}>
              {e.tone_id}: {(e.score * 100).toFixed(2) + '%'}
            </p>
          );
        })}
      </div>
    );
  }
};
export default Analysis;
