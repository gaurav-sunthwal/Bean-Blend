"use client"
import { Box, Button, Heading, HStack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import mug from "../Img/coffee-mid.webp";
export default function OrderNow() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="selected">
      <VStack h={isLargerThan800 ? "60vh" : "auto"} justifyContent={"center"}>
        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Box maxW={isLargerThan800 ? "50%" : "auto"}>
            <Image alt="mug" src={mug} />
          </Box>
          <Box maxW={isLargerThan800 ? "50%" : "auto"} p={6}>
            <Heading fontSize={"5vw"} p={2}>
              Order Your Favourite Coffee
            </Heading>
            <Text p={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              inventore dolore molestias recusandae culpa nostrum nobis adipisci
              tempore consequuntur cum nemo debitis, ullam, officiis quam fugit
              omnis odit, facere aliquid.
            </Text>
            <Button
              // mt={5}
              p={3}
              m={2}
              h={"50px"}
              bg={"#171717"}
              color={"white"}
              _hover={{
                color: "white",
                transform: "scale(1.04)",
              }}
            >
              Order Now
            </Button>
          </Box>
        </HStack>
      </VStack>
    </div>
  );
}
