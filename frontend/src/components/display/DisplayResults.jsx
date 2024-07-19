"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import WrapDisplayResultBox from "./WrapDisplayResultBox";
import ResultsHeading from "./ResultsHeading";
import DisplaySentimentData from "./DisplaySentimentData";

const DisplayResults = ({ result }) => {
  if (!result) {
    return (
      <Box mt={24} textAlign={"center"} color={"red"} fontSize={"24px"}>
        No data found...
      </Box>
    );
  }

  const { summary, keywords, sentiment } = result;

  return (
    <Box p={2} maxW={"100%"} mx={"auto"}>
      <WrapDisplayResultBox>
        <ResultsHeading title={"Summary"} />
        <Text mt={2} fontSize={"14px"} maxH={"300px"} overflow={"scroll"}>
          {summary}
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
          {keywords.map((keyword, index) => (
            <Text key={index} fontSize={"14px"}>{`${keyword},`}</Text>
          ))}
        </Flex>
      </WrapDisplayResultBox>
      <DisplaySentimentData {...sentiment} />
    </Box>
  );
};

export default DisplayResults;
