import React from 'react';

const Analysis = (props) => {
  console.log(props.toneAnalysis);
  if (props.toneAnalysis === null) {
    return (
      <div>
        <p>No analysis. Click the Analyze Button</p>
      </div>
    );
  } else if (
    props.toneAnalysis.document_tone.tones.length === 0 ||
    props.error
  ) {
    return (
      <div>
        <p>The document does not have a tone to it.</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Document tones:</p>
        {props.toneAnalysis.document_tone.tones.map((e, i) => {
          return (
            <p key={i}>
              {e.tone_id}: {(e.score * 100).toFixed() + '%'}
            </p>
          );
        })}
      </div>
    );
  }
};
export default Analysis;
