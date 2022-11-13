import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWeekly = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/signupCreateAccount");
	};
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper" h='fit-content' w='100%'>
				<Box className="insideBox" margin={'auto'} w={{base:'80%',sm:'80%',md:'80%',lg:'40%'}} > 
					<Heading fontSize="25px" mb="10px" mt='2rem'>
						What is your weekly goal?
					</Heading>
					<Text color="#A0A0A0">
						Let's break down your overall health goal into a weekly one
					</Text>
					<Text color="#A0A0A0">
						you can maintain. Slow-and-steady is best!
					</Text>
					<Button
						colorScheme="blue"
						color="#0066EE"
						variant="outline"
					w="90%"
						my="20px"
						overflow={'auto'}
						onClick={handleClick}
					>
						Lose 0.25 kilograms per week
					</Button>
					<Button
						colorScheme="blue"
						color="#0066EE"
						variant="outline"
						w="90%"
						mb="20px"
						overflow={'hidden'}
						onClick={handleClick}
					>
						Lose 0.5 kilograms per week (Recommended)
					</Button>
					<Button
						colorScheme="blue"
						color="#0066EE"
						variant="outline"
						w="90%"
						mb="20px"
						onClick={handleClick}
					>
						Lose 0.75 kilograms per week
					</Button>
					<Button
						colorScheme="blue"
						color="#0066EE"
						variant="outline"
						w="90%"
						onClick={handleClick}
						mb='2rem'
					>
						Lose 1 kilogram per week
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupWeekly;

// /signupWeekly
