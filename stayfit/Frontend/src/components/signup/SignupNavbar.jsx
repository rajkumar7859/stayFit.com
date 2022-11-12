import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const SignupNavbar = () => {
	const navigate = useNavigate();
	return (
		<Box
			h='60px'
			mb='5rem'
		>
			<Flex m="auto" w="75%" justifyContent={'center'}>
				<Image
					src={logo}
					alt="logo"
					h="8rem"
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
				<Spacer />
				
			</Flex>
		</Box>
	);
};

export default SignupNavbar;
