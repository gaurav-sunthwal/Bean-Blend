import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "./components/Slider";
import Explore from "./components/Explore";
import OrderNow from "./components/OrderNow";

export default function Home() {
  return (
    <Box m={0}>
      <Box h={"auto"}>
        <Slider />
      </Box>
      <Explore />
      <OrderNow />
    </Box>
  );
}
