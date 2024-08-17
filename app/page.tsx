import { Box, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "./components/Slider";
import Explore from "./components/Explore";
import OrderNow from "./components/OrderNow";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  <script>AOS.init();</script>;
  return (
    <Box m={0}>
       {/* <Heading data-aos="fade-up">Welcome to My Website</Heading> */}
      <Box h={"auto"} >
        <Slider />
      </Box>
      <Explore />
      <OrderNow />
    </Box>
  );
}
