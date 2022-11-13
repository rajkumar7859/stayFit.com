import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWelcome = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignupNavbar />
		<Box className="signupWrapper" padding={'1rem'} w={'100vw'} h='max-content'>
				<Box className="insideBox" margin={'auto'} w={{md:'90%',lg:'40%'}} p='1rem'>
					<Heading fontSize="1.6rem">Welcome! Just a few</Heading>
					<Heading fontSize="1.6rem">quick questions so we can customize</Heading>
					<Heading fontSize="1.6rem">MyFitnessPal for you.</Heading>

					<Button bg="#0066EE" color="white" mt="2.5rem" w={'80%'} onClick={() => navigate("/signupWeightGoal")}>
						Continue
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupWelcome;

// /
