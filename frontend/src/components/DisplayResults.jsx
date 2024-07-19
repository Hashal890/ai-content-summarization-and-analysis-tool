"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import ResultsHeading from "./ResultsHeading";
import WrapDisplayResultBox from "./WrapDisplayResultBox";

const DisplayResults = ({ result }) => {
  return (
    <>
      {result ? (
        <Box mt={4} p={4} maxW={"100%"} mx={"auto"}>
          <WrapDisplayResultBox>
            <ResultsHeading title={"Summary"} />
            <Text mt={2} fontSize={"14px"} maxH={"300px"} overflow={"scroll"}>
              {result.summary}
            </Text>
          </WrapDisplayResultBox>
          <WrapDisplayResultBox>
            <ResultsHeading title={"Keywords:"} />
            <Flex
              mt={2}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              maxH={"300px"}
              overflow={"scroll"}
            >
              {result.keywords.map((keyword, index) => (
                <Text key={index} fontSize={"14px"}>{`${keyword},`}</Text>
              ))}
            </Flex>
          </WrapDisplayResultBox>
          <WrapDisplayResultBox>
            <ResultsHeading title={" Sentiment Analysis:"} />
            <Text mt={2} fontSize={"14px"}>
              <span style={{ fontWeight: "bold", color: "teal" }}>Score:</span>{" "}
              {result.sentiment.score ? result.sentiment.score : "NA"}
            </Text>
            <Text fontSize={"14px"}>
              <span style={{ fontWeight: "bold", color: "teal" }}>
                Comparative:{" "}
              </span>
              {result.sentiment.comparative
                ? result.sentiment.comparative
                : "NA"}
            </Text>
            <Text fontSize={"14px"}>
              <span style={{ fontWeight: "bold", color: "teal" }}>
                Positive:{" "}
              </span>
              {result.sentiment.positive.join(", ")
                ? result.sentiment.positive.join(", ")
                : "NA"}
            </Text>
            <Text fontSize={"14px"}>
              <span style={{ fontWeight: "bold", color: "teal" }}>
                Negative:{" "}
              </span>
              {result.sentiment.negative.join(", ")
                ? result.sentiment.negative.join(", ")
                : "NA"}
            </Text>
          </WrapDisplayResultBox>
        </Box>
      ) : (
        <Box mt={24} textAlign={"center"} color={"red"} fontSize={"24px"}>
          No data found...
        </Box>
      )}
    </>
  );
};

export default DisplayResults;
