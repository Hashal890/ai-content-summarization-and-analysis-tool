"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import ResultsHeading from "./ResultsHeading";

const DisplayResults = ({ result }) => {
  return (
    <Box mt={4} textAlign={"center"}>
      {result ? (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
          <ResultsHeading title={"Summary"} />
          <Text mt={2} fontSize={"14px"}>
            {result.summary}
          </Text>
          <ResultsHeading title={"Keywords:"} />
          <Flex
            mt={2}
            flexWrap={"wrap"}
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {result.keywords.map((keyword, index) => (
              <Text key={index} fontSize={"14px"}>{`${keyword},`}</Text>
            ))}
          </Flex>
          <ResultsHeading title={" Sentiment Analysis:"} />
          <Text mt={2} fontSize={"14px"}>
            <span style={{ fontWeight: "bold" }}>Score:</span>{" "}
            {result.sentiment.score ? result.sentiment.score : "NA"}
          </Text>
          <Text fontSize={"14px"}>
            <span style={{ fontWeight: "bold" }}>Comparative: </span>
            {result.sentiment.comparative ? result.sentiment.comparative : "NA"}
          </Text>
          <Text fontSize={"14px"}>
            <span style={{ fontWeight: "bold" }}>Positive: </span>
            {result.sentiment.positive.join(", ")
              ? result.sentiment.positive.join(", ")
              : "NA"}
          </Text>
          <Text fontSize={"14px"}>
            <span style={{ fontWeight: "bold" }}>Negative: </span>
            {result.sentiment.negative.join(", ")
              ? result.sentiment.negative.join(", ")
              : "NA"}
          </Text>
        </Box>
      ) : (
        <Box>No data found.</Box>
      )}
    </Box>
  );
};

export default DisplayResults;
