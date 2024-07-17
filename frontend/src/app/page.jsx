"use client";

import { ChakraProvider, Heading } from "@chakra-ui/react";
import Upload from "@/components/Upload";

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Heading
          textAlign={"center"}
          m={8}
          fontSize={["16px", "18px", "20px", "22px"]}
        >
          AI-Powered Content Summarization & Analysis Tool
        </Heading>
        <Upload />
      </ChakraProvider>
    </main>
  );
}
