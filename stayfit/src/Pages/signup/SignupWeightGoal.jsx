import { Box, Button, color, Heading } from "@chakra-ui/react";
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
					<Heading fontSize="22px" fontWeight={'650'} mt='-4rem' mb='2rem'>
						What is your weight goal?
					</Heading>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						my="20px"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						_hover={{color:'blue',borderColor:'blue'}}
						onClick={() => navigate("/signupActivity")}
					>
						Lose Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						mb="20px"
						_hover={{color:'blue',borderColor:'blue'}}
						onClick={() => navigate("/signupActivity")}
					>
						Maintain Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
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
