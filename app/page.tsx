import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import Slider from "./components/Slider";

export default function Home() {
  return (
    <Box m={0}>
      <Slider/>
    </Box>
  );
}
