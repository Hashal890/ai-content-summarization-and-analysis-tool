"use client";

import { Text } from "@chakra-ui/react";
import WrapDisplayResultBox from "./WrapDisplayResultBox";
import ResultsHeading from "./ResultsHeading";

const DisplaySentimentData = ({ score, comparative, positive, negative }) => {
  return (
    <WrapDisplayResultBox>
      <ResultsHeading title={" Sentiment Analysis:"} />
      <Text mt={2} fontSize={"14px"}>
        <span style={{ fontWeight: "bold", color: "teal" }}>Score:</span>{" "}
        {score ? score : "NA"}
      </Text>
      <Text fontSize={"14px"}>
        <span style={{ fontWeight: "bold", color: "teal" }}>Comparative:</span>{" "}
        {comparative ? comparative : "NA"}
      </Text>
      <Text fontSize={"14px"}>
        <span style={{ fontWeight: "bold", color: "teal" }}>Positive:</span>{" "}
        {positive.join(", ") ? positive.join(", ") : "NA"}
      </Text>
      <Text fontSize={"14px"}>
        <span style={{ fontWeight: "bold", color: "teal" }}>Negative:</span>{" "}
        {negative.join(", ") ? negative.join(", ") : "NA"}
      </Text>
    </WrapDisplayResultBox>
  );
};

export default DisplaySentimentData;
