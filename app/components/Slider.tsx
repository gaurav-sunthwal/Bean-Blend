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
import mug from "../Img/Mug.png";
import app from "../Img/app.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <>
      <Swiper className="mySwiper" 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={
          {
            clickable:true,
          }
        }
      
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}

function SliderPage({ title, subTitle, btn1, btn2, img }) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="selected">
      <Box h={"auto"}>
        <HStack justifyContent={"space-around"} flexWrap={"wrap-reverse"}>
          <Box maxW={isLargerThan800 ? "50%" : "100%"}>
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
            <HStack p={2} mb={"3"}>
              <Button
                h={"50px"}
                bg={"#171717"}
                color={"white"}
                _hover={{
                  color: "white",
                  transform: "scale(1.04)",
                }}
              >
                {btn1}
              </Button>
              <Button
                h={"50px"}
                colorScheme="pink"
                _hover={{ transform: "scale(1.04)" }}
              >
                {btn2}
              </Button>
            </HStack>
          </Box>
          <Box
            maxW={isLargerThan800 ? "50%" : "100%"}
            w={isLargerThan800 ? "42%" : "100%"}
            maxH={"100vh"}
          >
            <Image src={img} alt="slider-1" />
          </Box>
        </HStack>
      </Box>
    </div>
  );
}

export default Slider;

/*


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



*/
