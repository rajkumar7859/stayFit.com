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

export const Video = () => {
    const navigate = useNavigate();
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
				<Icons.FaFacebookSquare className={style.socialMediaIconFB} />
				<Icons.FaTwitterSquare className={style.socialMediaIconTwitter} />
				<Icons.FaInstagram className={style.socialMediaIconInsta} />
				<Icons.FaPinterest className={style.socialMediaIconPin} />
				<hr />
				<Icons.FaSearch className={style.socialMediaIconSearch} />
			</div>
			
		</div>
        <div>
        <div className={style.line3}></div>
      <Box height ="auto" mt={6} width="80%" m="auto">
    
        <video  width="100%" height="100%" controls loop muted autoPlay  >
        <source src="https://stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/medium.mp4" type="video/mp4"/>
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
        <EssentNav/>
        <br />
        
        <Box border="0px solid red" h="300px"  bg="gray.200" >
          <Box border="0px solid red" h="200px" w="50%"  m="auto" mt={22} >
<Text fontSize={49} color="#0066ee" m="auto" ml={44}  >myfitnesspal </Text>
<Text fontSize={16} >MyFitnessPal is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</Text>
<br />

        </Box>
       
        </Box>
        </div>
<Footer/>
        </div>
    
  )
}
