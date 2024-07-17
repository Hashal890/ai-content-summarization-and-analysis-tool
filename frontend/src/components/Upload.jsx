"use client";

import { useState } from "react";
import {
  VStack,
  Input,
  Button,
  Textarea,
  CircularProgress,
} from "@chakra-ui/react";
import DisplayResults from "./DisplayResults";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    let formData = new FormData();
    if (file) formData.append("file", file);
    else formData.append("text", text);
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack justifyContent={"center"} alignItems={"center"}>
      <Input type="file" onChange={handleFileChange} maxW={"500px"} p={2} />
      <Textarea
        placeholder="Enter text here to receive summarized version"
        value={text}
        onChange={handleTextChange}
        mt={2}
        maxW={"500px"}
        p={2}
      />
      <Button
        onClick={handleUpload}
        mt={2}
        disabled={isLoading}
        colorScheme={"linkedin"}
      >
        {isLoading ? (
          <CircularProgress isIndeterminate size={"24px"} color={"teal"} />
        ) : (
          "Upload"
        )}
      </Button>
      <DisplayResults result={result} />
    </VStack>
  );
};

export default Upload;
