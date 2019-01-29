import React from "react";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";

const Analysis = ({ toneAnalysis, error }) => {
  let toneResult;
  if (error == "Error: Request failed with status code 429") {
    toneResult =
      "Free users are capped at 100 email analyses and cannot send emails.";
  }
  if (toneAnalysis && toneAnalysis.document_tone.tones.length) {
    toneResult = toneAnalysis.document_tone.tones.map((e, i) => (
      <p key={i}>
        {e.tone_id}: {(e.score * 100).toFixed() + "%"}
      </p>
    ));
  } else {
    toneResult = "The document does not have a tone to it.";
  }
  return (
    <Card style={{ transition: null }}>
      <CardHeader>Emotional Analysis</CardHeader>
      <CardBody>{toneResult}</CardBody>
    </Card>
  );
};
export default Analysis;
