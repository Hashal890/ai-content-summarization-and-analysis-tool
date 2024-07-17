"use client";

const { Heading } = require("@chakra-ui/react");

const ResultsHeading = ({ title }) => {
  return (
    <Heading size="md" color={"green"} mt={4}>
      {title}
    </Heading>
  );
};

export default ResultsHeading;
