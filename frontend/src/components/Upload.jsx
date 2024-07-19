"use client";

import { useState } from "react";
import {
  VStack,
  Input,
  Button,
  Textarea,
  CircularProgress,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import DisplayResults from "./display/DisplayResults";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setText(""); // Clear the text input when a file is selected
    setError(null); // Clear any previous error
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setFile(null); // Clear the file input when text is entered
    setError(null); // Clear any previous error
  };

  const handleUpload = async () => {
    if (!file && !text) {
      setError("Please provide either a file or text.");
      return;
    }

    setIsLoading(true);
    setError(null);
    let formData = new FormData();
    if (file) formData.append("file", file);
    else formData.append("text", text);
    try {
      const res = await axios.post(
        "https://ai-content-summarization-and-analysis.onrender.com/upload",
        formData
      );
      setResult(res.data);
    } catch (error) {
      console.error("Error uploading data:", error);
      setError("Error uploading data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={"sm"} color={"red"} my={2} textAlign={"center"}>
        Select only one method at once: either type text or select a file,
        otherwise data will not show.
      </Text>
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          <AlertTitle mr={2}>Upload Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
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
