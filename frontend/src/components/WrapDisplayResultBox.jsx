"use client";

import { Box } from "@chakra-ui/react";

const WrapDisplayResultBox = ({ children }) => {
  return (
    <Box
      border={"1px dashed grey"}
      p={4}
      borderRadius={"20px"}
      mt={4}
      w={"100%"}
      textAlign={"center"}
    >
      {children}
    </Box>
  );
};

export default WrapDisplayResultBox;
