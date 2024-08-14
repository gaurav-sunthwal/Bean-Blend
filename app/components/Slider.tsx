//@ts-nocheck
"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mug from "../Img/Mug.png";
import app from "../Img/app.png";
import Image from "next/image";

function Slider() {
  return (
    <div>
      <Box p={2}>
        <Carousel
          infiniteLoop
          autoPlay
          interval={5000}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          className="slider"
        >
          <Box>
            <SliderPage
              title={"Bean & Blend Deliciious Coffee"}
              subTitle={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga et
              officia rerum sit debitis doloribus magni veritatis quibusdam eum,
              ducimus recusandae tempora suscipit, rem illo. Nemo culpa quaerat
              minus provident.`}
              btn1={"Shop Coffee"}
              btn2={"Download App"}
              img={mug}
            />
          </Box>
          <Box>
            <SliderPage
              title={"Bean & Blend Amazing Application"}
              subTitle={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga et
              officia rerum sit debitis doloribus magni veritatis quibusdam eum,
              ducimus recusandae tempora suscipit, rem illo. Nemo culpa quaerat
              minus provident.`}
              
              btn1={"Download App"}
              btn2={"Shop Coffee"}
              img={app}
            />
          </Box>
        </Carousel>
      </Box>
    </div>
  );
}

function SliderPage({ title, subTitle, btn1, btn2, img }) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Box zIndex={"-1"}>
        <HStack justifyContent={"space-around"} flexWrap={"wrap-reverse"}>
          <Box maxW={isLargerThan800 ? "50%" : "100%"} p={5}>
            <Heading
              fontSize={isLargerThan800 ? "7vw" : "12vw"}
              textAlign={"left"}
              p={2}
            >
              {title}
            </Heading>
            <Text textAlign={"left"} p={2}>
              {subTitle}
            </Text>
            <HStack p={2}>
              <Button
                h={"50px"}
                bg={"#171717"}
                color={"white"}
                _hover={{
                  color: "white",
                }}
              >
                {btn1}
              </Button>
              <Button h={"50px"} colorScheme="pink">
                {btn2}
              </Button>
            </HStack>
          </Box>
          <Box maxW={isLargerThan800 ? "50%" : "100%"} w={"42%"} maxH={"100vh"}>
            <Image src={img} alt="slider-1" />
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default Slider;
