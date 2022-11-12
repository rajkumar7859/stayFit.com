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
			<Box className="signupWrapper">
				<Box className="insideBox" w={'40%'}>
					<Heading fontSize="22px" fontWeight={'650'} mt='1rem' mb='2rem'>
						What is your weight goal?
					</Heading>
					<Button
						colorScheme="blue"
						variant="outline"
						w="400px"
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
						w="400px"
						h='60px'
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
						w="400px"
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
