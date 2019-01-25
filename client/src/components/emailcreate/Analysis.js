import React from 'react';

const Analysis = (props) => {
  console.log(props.toneAnalysis);
  if (
    (props.toneAnalysis &&
      props.toneAnalysis.document_tone.tones.length === 0) ||
    props.error == 'Error: Request failed with status code 500'
  ) {
    return (
      <div>
        <p>The document does not have a tone to it.</p>
      </div>
    );
  } else if (props.error == 'Error: Request failed with status code 429') {
    return (
      <div>
        <p>
          You have used up your monthly allowance of free analyses. If you want
          to analyze more emails then upgrade now.
        </p>
      </div>
    );
  } else if (props.toneAnalysis === null) {
    return (
      <div>
        <p>No analysis. Click the Analyze Button</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Document tones:</p>
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
