import { Box, Button, color, Heading,Flex } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWeightGoal = () => {
	const navigate = useNavigate();
	
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper" padding={'1rem'} w={'100vw'} h='fit-content' border='1px solid black'>
				<Box className="insideBox" w={{base:'80%',sm:'80%',md:'80%',lg:'40%'}} margin='auto'>
					<Heading fontSize="1.5rem" fontWeight={'650'} mt='1rem' mb='2rem'>
						What is your weight goal?
					</Heading>
					<Button
						colorScheme="blue"
						variant="outline"
						w="90%"
						fontSize={'1rem'}
						h='60px'
						my="10px"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						_hover={{color:'blue',borderColor:'blue'}}
						onClick={()=>{navigate("/signupActivity")}}
					>
						Lose Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="90%"
						h='60px'
						fontSize={'1rem'}
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						mb="10px"
						
						_hover={{color:'blue',borderColor:'blue'}}
						onClick={() => navigate("/signupActivity")}
					>
						Maintain Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="90%"
						h='60px'
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						_hover={{color:'blue',borderColor:'blue'}}
					onClick={() => {navigate("/signupActivity")}}
					>
						Gain Weight
					</Button>
				
				</Box>
				
			</Box>
		</>
	);
};

export default SignupWeightGoal;

// /signupWeightGoal
