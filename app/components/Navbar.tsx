//@ts-nocheck
"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image1 from "next/image";
import React from "react";
import logo from "../Img/logo.png";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

type Props = {
  manuLink: string;
  manuName: string;
};

export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="selected">

    <Box p={2} zIndex={9}>
      <HStack justifyContent={"space-between"}>
        <Box  w={"100px"}>
          <Image1 src={logo} alt="logo" />
        </Box>
        {isLargerThan800 ? <OtherItem /> : <MobileManu />}
      </HStack>
    </Box>
    </div>
  );
}

function MobileManu({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box p={2} ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Heading>
          <FaBarsStaggered />
        </Heading>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Manu</DrawerHeader>

          <DrawerBody>
            <ManuItem />
            <ButtonSec />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function OtherItem({}) {
  return (
    <>
      <HStack>
        <ManuItem />
      </HStack>
      <Box>
        <ButtonSec />
      </Box>
    </>
  );
}

function ButtonSec({}) {
  return (
    <>
      <HStack>
        <Box p={2} cursor={"pointer"} _hover={{
           transform:"scale(1.2)", 
        }}>
          <ShopBag />
        </Box>
        <Box>
          <Button bg={"#171717"} _hover={{
            color:"white",
            transform:"scale(1.04)", 
          }} color={"white"} h={"48px"}>
            Buy Gift Vouchers
          </Button>
        </Box>
      </HStack>
    </>
  );
}

function ManuItem({}) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Menu manuLink={"/About"} manuName={"About"} />
      <Menu manuLink={"/Cafe_Menu"} manuName={"Cafe Menu"} />
      <Menu manuLink={"/find"} manuName={"Find Us"} />
      <Menu manuLink={"/Contact"} manuName={"Contact"} />
    </>
  );
}

function Menu({ manuLink, manuName }: Props) {
  return (
    <>
      <Link href={manuLink}>
        <Heading p={2} fontWeight={"500"} fontSize={"20px"}>
          {manuName}
        </Heading>
      </Link>
    </>
  );
}

function ShopBag() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box boxShadow="md" borderRadius={"50%"} p={2} bg={"white"}>
        <Heading
          p={"0px"}
          textAlign={"center"}
          fontSize={"20px"}
          ref={btnRef}
          onClick={onOpen}
          color={"#171717"}
        >
          <FaShoppingBag />
        </Heading>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Buy Now</DrawerHeader>

          <DrawerBody overflow={"auto"}>
            <BagItemCard />
            <BagItemCard />
            <BagItemCard />
            <BagItemCard />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function BagItemCard({}) {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mb={2}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
