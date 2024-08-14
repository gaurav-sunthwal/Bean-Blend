//@ts-nocheck
"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaIceCream } from "react-icons/fa";

export default function Explore() {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div>
      <VStack p={3} h={isLargerThan800? "90vh" : "auto"} justifyContent={"center"}>
        <Heading textAlign={"center"} fontSize={"5vw"}>
          Explore Our Bean & Blend
        </Heading>
        <Text fontSize={"15px"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
          quisquam dicta maxime, perferendis veniam!
        </Text>
        <HStack justifyContent={"center"} flexWrap={"wrap-reverse"}>
          <ExploreOps
            title={"Coffee Wold"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
            icon={<PiCoffeeFill />}
            btn={"Explore Coffee"}
          />
          <ExploreOps
            title={"Food Manu"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
            icon={<MdFastfood />}
            btn={"Explore Coffee"}
          />
          <ExploreOps
            title={"Desert Manu"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
            icon={<FaIceCream />}
            btn={"Explore Coffee"}
          />
        </HStack>
      </VStack>
    </div>
  );
}

function ExploreOps({ title, subTitle, icon, btn }) {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Card m={3} w={isLargerThan800 ? "400px" : "100%"} h={"auto"} className="ExportCard">
        <CardBody textAlign={"center"} alignItems={"center"}>
          <Heading>{title}</Heading>
          <Text>{subTitle}</Text>
          <HStack justifyContent={"center"}>
            <Heading
              p={4}
              fontSize={"140px"}
              textAlign={"center"}
              color={"gray"}
            >
              {icon}
            </Heading>
          </HStack>
          <Button
            h={"50px"}
            bg={"#171717"}
            color={"white"}
            _hover={{
              color: "white",
              transform: "scale(1.04)",
            }}
          >
            {btn}
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
