import { Input, Stack } from "@chakra-ui/react";
import React from "react";

export default function InputForm() {
  return (
    <Box>
      <Stack>
        <Input type="text" placeholder="Something" />
      </Stack>
    </Box>
  );
}
