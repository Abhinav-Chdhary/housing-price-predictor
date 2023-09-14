import {
  Input,
  Stack,
  Container,
  FormLabel,
  InputGroup,
  Box,
  Select,
} from "@chakra-ui/react";
import React from "react";

export default function InputForm() {
  return (
    <Container>
      <Stack mt={2}>
        <InputGroup>
          <FormLabel fontSize={"larger"} mx={1.5}>
            Latitude:
          </FormLabel>
          <Input type="text" placeholder="Latitude" />
          <FormLabel fontSize={"larger"} mx={1.5}>
            Longitude:
          </FormLabel>
          <Input type="text" placeholder="Longitude" />
        </InputGroup>
        <Box>
          <FormLabel>Housing Median Age :</FormLabel>
          <Input type="number" placeholder="99" />
        </Box>
        <Box>
          <FormLabel>Total rooms :</FormLabel>
          <Input type="number" placeholder="99" />
        </Box>
        <Box>
          <FormLabel>Total bedrooms :</FormLabel>
          <Input type="number" placeholder="99" />
        </Box>
        <Box>
          <FormLabel>Population :</FormLabel>
          <Input type="number" placeholder="99" />
        </Box>
        <Box>
          <FormLabel>Households :</FormLabel>
          <Input type="number" placeholder="126" />
        </Box>
        <Box>
          <FormLabel>Median Income :</FormLabel>
          <Input type="number" placeholder="8.3252" />
        </Box>
        <Box>
          <FormLabel>Ocean Proximity:</FormLabel>
          <Select>
            <option>NEAR BAY</option>
            <option>NEAR OCEAN</option>
            <option>less than 1hr OCEAN</option>
            <option>INLAND</option>
            <option>ISLAND</option>
          </Select>
        </Box>
      </Stack>
    </Container>
  );
}
