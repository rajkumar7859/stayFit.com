import React, { memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../styling/home.css";
import { Link } from "react-router-dom";

import diary from "../assests/diary.PNG";
import barcode from "../assests/barcode.PNG";
import shoe from "../assests/shoe.PNG";

import appStore from "../assests/app-store.PNG";
import googlePlay from "../assests/google-play.PNG";
import Carousel from "../components/Carousel";

import stephanie from "../assests/Stephanie.PNG";
import eric from "../assests/Eric.PNG";
import lori from "../assests/Lori.PNG";
import NavbarPremium from "./premium/NavbarPremium";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const middleData=[
  {
    logoVar:diary,
    headi:" Learn. Track. Improve.",
    diss:"Keeping a food diary helps you understand your habits and increases your likehood of hitting your goals. ",
  },
  {
    logoVar:barcode,
    headi:"Logging Simplified",
    diss:"Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.",
  },
  {
    logoVar:shoe,
    headi:"Stay Motivated.",
    diss:"Join the World’s Largest Fitness Community for advice, tips, and support 24/7.",
  },
]

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarPremium />
      <Box>
        <Box className="top-section">
          <Box className="left-column">
            <Box height={"82.7%"} width="100%"></Box>
            <Box
              height={"17.3%"}
              width="100%"
              className="bottom-left-column"
            ></Box>
          </Box>

          
          <Box className="mid-column">
            <Box className="container">
              <Box className="heading">
                <Heading size={{ base: "xl", sm: "2xl" }} as={"h1"}>
                Good health starts with what you eat.
                </Heading>
              </Box>
              <Text
                className="description"
                fontSize={{ base: "md", sm: "sm", md: "md" }}
              >
                Take control of your goals. Track calories, break down ingredients, and long activities with MyFitnessPal.
              </Text>
              <Button
                colorScheme={"blue"}
                width={{ base: "150px", md: "150px", lg: "200px" }}
                height="50"
                onClick={() => navigate("/signup")}
              >
                START FOR FREE
              </Button>

              <Text onClick={() => navigate("/login")}>
                Already have an account?{" "}
                <Link to={"#"}>
                  <span style={{ color: "blue" }}>Login</span>
                </Link>
              </Text>
            </Box>
          </Box>
            <Box className="topImage" ><Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" /></Box>
          </Box> 
          
          <Box className="meddle_Column">
              <Box><Image className="meddleImage" src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75" /></Box>
            <Box className="sec-container">
              <Box className="sec-heading">
                <Heading mt="10rem" size={{ base: "xl", sm: "2xl" }} as={"h1"}>
                Log from over 14 million foods.
                </Heading>
              </Box>
              <Text
                className="sec-description"
                fontSize={{ base: "md", sm: "sm", md: "md" }}>
                See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.
              </Text>
            
            </Box>
          </Box>
          <Box className="right-column"></Box>

<Center mt="4rem">
<Box textAlign="center" >
  <Box><Heading fontSize="3rem" as={"h2"} ml={{ base: "8rem",md:"5rem"}} size={{ base: "xl" }} >The Tools for Your Goals</Heading></Box>
  <Box ><Text ml={{ base: "11rem",md:"15rem" ,lg:"24rem"  }} w="46%" fontSize={{ base: "sm",md:"sm" ,lg: "md" }} >Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.</Text></Box>
 
  <Flex w="78%" m={{ base: "4", md: 8, lg:'auto' }}
              gap={{ base: "20px", lg: "40px" }}
              flexDirection={{ base: "column", lg: "row", md: "column" }} >
{middleData?.map((item)=>
  <Box  key={item.logoVar} w="85%" ml={{ base: "5rem",md:"8rem" ,lg:"6rem"}} ><Image src={item.logoVar} m={"auto"}/>
   <Box m={{ base: 1, lg: 2 }}><Heading as={"h5"} size="md">{item.headi}</Heading></Box>
   <Box> <Text fontSize={{ base: "md", lg: "lg" }}>{item.diss}</Text></Box>
  </Box>
)
}
</Flex>
</Box>

</Center>
        <Box className="fifth-section">
          <Box>
            <Box className="fifth-section-heading">
              <Heading as={"h1"} size={{ base: "xl", sm: "2xl" }}>
                Victory Stories
              </Heading>
            </Box>
            <Box className="fifth-section-des">
              <Text fontSize={{ base: "md", lg: "lg" }}>
                When you reach your goals, our whole community celebrates with
                you. That’s over 200 million members sharing in your
                victory—using it to inspire their own journey.
              </Text>
            </Box>
          </Box>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={stephanie} />
              </div>
              <div className="carousel-item">
                <Image src={eric} />
              </div>
              <div className="carousel-item">
                <Image src={lori} />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only"></span>
            </a>
          </div>
        </Box>
        <Box className="sixth-section">
          <Box className="sixth-section-heading">
            <Heading as={"h2"} size={{ base: "xl", sm: "2xl" }}>
              Recipes & Inspiration
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} p={{ base: 2, lg: "8" }}>
              Get nutritionist-approved recipes and motivational workout tips
              from MyFitnessPal experts.
            </Text>
          </Box>
          <Flex
            gap={{ base: 6, lg: 8 }}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            mt={{ base: 2, lg: 4 }}
          >
            <Box  borderTopRadius="1rem"  className="sixth-section-cards">
              <Box>
                <Image  borderTopRadius="1rem" src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  15 Make-Ahead Breakfasts Under 300 Calories
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
            <Box  borderTopRadius="1rem"  className="sixth-section-cards">
              <Box>
                <Image  borderTopRadius="1rem" src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  The Problem With Cheat Days
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
            <Box  borderTopRadius="1rem"  className="sixth-section-cards">
              <Box>
                <Image borderTopRadius="1rem" src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  Essential Guide to Getting Moving
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box className="seventh-section">
          <Box
            className="seventh-section-heading"
            mt={{ base: "20px", lg: "24px" }}
          >
            <Heading as="h1" size={{ base: "xl", sm: "2xl" }}>
              Connect with over 50 apps.
            </Heading>
          </Box>
          <Box pt={{ base: 4, md: 6 }}>
            <Text fontSize={{ base: "md", sm: "xl" }}>
              Easily link your MyFitnessPal account with apps that support your
              healthier lifestyle. It’s not just about calories. It’s about
              feeling better, looking better, and living better.
            </Text>
          </Box>
          <Box mt={[8, 16]}>
            <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" />
          </Box>
          <Flex justifyContent={"center"} mt={16} w={{base: "80%"}} m="auto">
            <Image src={appStore} w={["150px", "200px"]} />
            <Image src={googlePlay} w={["150px", "200px"]} />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default memo(Home);
