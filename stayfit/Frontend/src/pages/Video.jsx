import React from 'react'
import BlogNav from './BlogNav'
 import style from "../styling/BlogNavFooter.module.css";
import video from "../Images/video.png";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box,GridItem,Image ,Text} from '@chakra-ui/react';
import EssentNav from "./EssentNav"
import Footer from '../components/Footer/Footer'
import "../pages/Video.css";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent
} from "@chakra-ui/react";
export const Video = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);
  return (
    
    <div> 

<div>
			<div className={style.homeicondiv}>
				<Link to="/">
					<Icons.FaHome className={style.homeicon} />
				</Link>
			</div>
			<div
				style={{ textAlign: "center", cursor: "pointer", width: "20%",
				margin: "auto" }}
				onClick={() => navigate("/myHome")}
			>
				<img src={video}alt="" style={{width:'70%',margin:'auto'}}/>
			</div>
      <div className={style.socialMediaIconDiv}>
				<a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F">
				<Icons.FaFacebookSquare className={style.socialMediaIconFB} 
				
				/>
				</a>
				<a
            href="https://twitter.com/intent/tweet?text=Video%20@MyFitnessPal%20-%20https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F"
            target="_blank"
            rel="noreferrer"
          >
         <Icons.FaTwitterSquare className={style.socialMediaIconTwitter} /></a>
		 
		 <a
            href="https://twitter.com/intent/tweet?text=Video%20@MyFitnessPal%20-%20https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F"
            target="_blank"
            rel="noreferrer"
          ><Icons.FaInstagram className={style.socialMediaIconInsta} /></a>
					<a
            href="https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F&is_video=true"
            target="_blank"
            rel="noreferrer"
          ><Icons.FaPinterest className={style.socialMediaIconPin} /></a>
				<hr />
				<Icons.FaSearch className={style.socialMediaIconSearch} />
			</div>
			
		</div>
        <div>
        <div className={style.line3}></div>
      <Box height ="auto" mt={6} width="80%" m="auto">
    
        <video  width="100%" height="100%" controls loop muted autoPlay  >
        <source src="https://vod-progressive.akamaized.net/exp=1671835301~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1857%2F20%2F509287291%2F2345115767.mp4~hmac=e0de2d4c04636d0427b222f1180c038f6b4a0fd7cf77ea236cc8409da595d944/vimeo-prod-skyfire-std-us/01/1857/20/509287291/2345115767.mp4"/>
        </video>
        
        </Box>
        <Box mt={34} ml={208} display="flex" gap={34} >
        <Box h="400px" w="250px" >
    <Image src="https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MyFitnessPal-101-484x726.png" borderRadius="10px" w="250px" h="400"/>
  <Text fontSize="19px" color="black"  >MyFitnessPal 101</Text>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://blog.myfitnesspal.com/wp-content/uploads/2020/10/Ask-the-RD-487x726-1-484x726.jpg" borderRadius="10px" w="250px" h="400"/>
    <Text fontSize="19px" color="black"  >Ask RD</Text>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://blog.myfitnesspal.com/wp-content/uploads/2020/03/Healthy-at-Home-484x726.jpg" borderRadius="10px" w="250px" h="400"/>
    <Text fontSize="19px" color="black"  >Healthy At Home 101</Text>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://blog.myfitnesspal.com/wp-content/uploads/2017/02/In-a-Snap-484x726.jpg" borderRadius="10px" w="250px" h="400"/>
    <Text fontSize="19px" color="black"  >Healthy Recipes</Text>
</Box>

        </Box>
        <br /><br />
      
        <br />
        {/* video */}
        <Box height ="auto" mt={6} width="80%" m="auto">
<Text fontSize="29px" fontWeight="bold"> Channels </Text>
        <box display="flex">
        <div className="threecard"  >

          <div className='three'>
            
              <img
                onClick={onOpen}
                src="https://i.ytimg.com/vi/uZX14W4rVCU/hq720.jpg?sqp=-oaymwE9CNAFEJQDSFryq4qpAy8IARUAAIhCGAHYAQHiAQYIHRgGIAHwAQH4AdQGgALgA4oCDAgAEAEYGSBVKH8wDw==&rs=AOn4CLAeF-KYaRhoL65QriBR6RGssQLB2Q"
                alt="kriss"
              />
              <h4>Lets Move to Be Active Video</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ width: "70%" }}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://youtu.be/OxeFwv4AeKM"
                    title="Plan "
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalContent>
              </Modal>
          
          </div>
          <div className='three'>
            
              <img
                onClick={onOpen}
                src="https://i.ytimg.com/vi/p7liQk45fFk/hq720.jpg?sqp=-oaymwE9CNAFEJQDSFryq4qpAy8IARUAAIhCGAHYAQHiAQYIHRgGIAHwAQH4AdQGgALgA4oCDAgAEAEYZSBbKFEwDw==&rs=AOn4CLBmGW3Kf3d-J55d-L_HYz73cQj0cg"
                alt="kriss"
              />
              <h4>Buid Healthier Habit Video</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p7liQk45fFk" title="YouTube video " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ModalContent>
              </Modal>
</div>
<div className='three'>
            
            <img
              onClick={onOpen}
              src="https://i.ytimg.com/vi/sMmTyL2O9dY/hq720.jpg?sqp=-oaymwEjCNAFEJQDSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBFGbow-4tz2DWEzbtEuWhiAvQ45A"
              alt="kriss"
            />
            <h4>Positive Nutrition  Video </h4>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/sMmTyL2O9dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ModalContent>
            </Modal>

</div>
</div>
</box>
</Box>
{/* video */}
<br /><br />
        <EssentNav/>
        <br />
        <Box   border="0px solid red" h="300px"  bg="gray.200" >
          <Box border="0px solid red" h="200px" w="50%"  m="auto" mt={22} >
<Text fontSize={49} color="#0066ee" m="auto" ml={44}  >myfitnesspal </Text>
<Text fontSize={16} >MyFitnessPal is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</Text>
<br />

        </Box>
       
        </Box>
        </div>
<Footer/>
{/* <h1 style={{ margin: "1rem 0" }} className="title">
         Myfitnesspal's Ultimate  Guides | Best Beaches in India
        </h1>
        <box display="flex">
        <div className="threecard"  >

          <div>
            
              <img
                onClick={onOpen}
                src="https://i.ytimg.com/vi/uZX14W4rVCU/hq720.jpg?sqp=-oaymwE9CNAFEJQDSFryq4qpAy8IARUAAIhCGAHYAQHiAQYIHRgGIAHwAQH4AdQGgALgA4oCDAgAEAEYGSBVKH8wDw==&rs=AOn4CLAeF-KYaRhoL65QriBR6RGssQLB2Q"
                alt="kriss"
              />
              <h4>Plan An Epic Trip To Goa</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ width: "70%" }}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jU7ZyViNu2U"
                    title="Plan An Epic Trip To Go"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalContent>
              </Modal>
          
          </div>
          <div>
            
              <img
                onClick={onOpen}
                src="https://i.ytimg.com/vi/p7liQk45fFk/hq720.jpg?sqp=-oaymwE9CNAFEJQDSFryq4qpAy8IARUAAIhCGAHYAQHiAQYIHRgGIAHwAQH4AdQGgALgA4oCDAgAEAEYZSBbKFEwDw==&rs=AOn4CLBmGW3Kf3d-J55d-L_HYz73cQj0cg"
                alt="kriss"
              />
              <h4>Explore Andaman & Nicobar Islands</h4>
              <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p7liQk45fFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ModalContent>
              </Modal>
</div>
<div>
            
            <img
              onClick={onOpen}
              src="https://i.ytimg.com/vi/sMmTyL2O9dY/hq720.jpg?sqp=-oaymwEjCNAFEJQDSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBFGbow-4tz2DWEzbtEuWhiAvQ45A"
              alt="kriss"
            />
            <h4>Explore Andaman & Nicobar Islands</h4>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/sMmTyL2O9dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ModalContent>
            </Modal>

</div>
</div>
</box> */}
        </div>
    
  )
}
