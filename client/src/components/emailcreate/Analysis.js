import React from 'react';

const Analysis = (props) => {
  console.log(props.error);
  console.log(props.toneAnalysis);
  if (props.error == 'Error: Request failed with status code 429') {
    return (
      <div>
        <p>
          Free users are capped at 100 email analyses and cannot send emails.
        </p>
      </div>
    );
  } else if (
    (props.toneAnalysis &&
      props.toneAnalysis.document_tone.tones.length === 0) ||
    props.error == 'Error: Request failed with status code 500'
  ) {
    return (
      <div>
        <p>The document does not have a tone to it.</p>
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
              {e.tone_id}: {(e.score * 100).toFixed() + '%'}
            </p>
          );
        })}
      </div>
    );
  }
};
export default Analysis;
