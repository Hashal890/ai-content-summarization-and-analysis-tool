"use client";

import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import Upload from "@/components/Upload";

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Box
          bg={"rgba(2, 6, 23, 1)"}
          color={"white"}
          fontFamily={"Sofia Sans Semi Condensed, sans-serif"}
          minH={"100vh"}
          p={2}
        >
          <Heading
            textAlign={"center"}
            py={8}
            fontSize={["16px", "18px", "20px", "22px"]}
          >
            AI-Powered Content Summarization & Analysis Tool
          </Heading>
          <Upload />
        </Box>
      </ChakraProvider>
    </main>
  );
}
