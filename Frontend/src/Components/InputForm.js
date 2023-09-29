import {
  Input,
  Stack,
  Container,
  FormLabel,
  InputGroup,
  Box,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function InputForm() {
  const initialHousingDetails = {
    latitude: "",
    longitude: "",
    housing_median_age: "",
    total_rooms: "",
    total_bedrooms: "",
    population: "",
    households: "",
    median_income: "",
    ocean_proximity: "NEAR BAY",
  };
  const [housingDetails, sethousingDetails] = useState(initialHousingDetails);
  const onDetailsChange = (event) => {
    sethousingDetails({
      ...housingDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(housingDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response from the server
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  return (
    <Container>
      <Stack mt={2}>
        <InputGroup>
          <FormLabel fontSize={"larger"} mx={1.5}>
            Latitude:
          </FormLabel>
          <Input
            type="text"
            placeholder="Latitude"
            name="latitude"
            value={housingDetails.latitude}
            onChange={onDetailsChange}
          />
          <FormLabel fontSize={"larger"} mx={1.5}>
            Longitude:
          </FormLabel>
          <Input
            type="text"
            placeholder="Longitude"
            name="longitude"
            value={housingDetails.longitude}
            onChange={onDetailsChange}
          />
        </InputGroup>
        <Box>
          <FormLabel>Housing Median Age :</FormLabel>
          <Input
            type="number"
            placeholder="99"
            name="housing_median_age"
            value={housingDetails.housing_median_age}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Total rooms :</FormLabel>
          <Input
            type="number"
            placeholder="99"
            name="total_rooms"
            value={housingDetails.total_rooms}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Total bedrooms :</FormLabel>
          <Input
            type="number"
            placeholder="99"
            name="total_bedrooms"
            value={housingDetails.total_bedrooms}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Population :</FormLabel>
          <Input
            type="number"
            placeholder="99"
            name="population"
            value={housingDetails.population}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Households :</FormLabel>
          <Input
            type="number"
            placeholder="126"
            name="households"
            value={housingDetails.households}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Median Income :</FormLabel>
          <Input
            type="number"
            placeholder="8.3252"
            name="median_income"
            value={housingDetails.median_income}
            onChange={onDetailsChange}
          />
        </Box>
        <Box>
          <FormLabel>Ocean Proximity:</FormLabel>
          <Select
            name="ocean_proximity"
            value={housingDetails.ocean_proximity}
            onChange={onDetailsChange}
          >
            <option>NEAR BAY</option>
            <option>NEAR OCEAN</option>
            <option>less than 1hr OCEAN</option>
            <option>INLAND</option>
            <option>ISLAND</option>
          </Select>
        </Box>
        <Input type="submit" onClick={handleSubmit} />
      </Stack>
    </Container>
  );
}
