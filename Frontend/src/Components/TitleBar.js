import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import InputForm from "./InputForm";

export default function TitleBar() {
  return (
    <Box align="center">
      <Heading>Housing Pricing Predictor (California)</Heading>
      <InputForm />
    </Box>
  );
}
