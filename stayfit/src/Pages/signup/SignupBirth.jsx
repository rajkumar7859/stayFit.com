import React, { useState } from 'react'
import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
  Radio,
  Center,
  HStack,
   RadioGroup
} from "@chakra-ui/react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";
const SignupBirth = () => {
    const [value ,setValue ] = useState(1)
    const navigate = useNavigate();
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper" >
				<Box className="insideBox" h="max-content" w='40%' p={'40px'}>
					<Box className="tallSubBox" w='100%'>
						<Heading fontSize="20px" mb="10px" mt='-1rem'>
            Please select which sex we should use to calculate your calorie needs.
						</Heading>
						<RadioGroup onChange={setValue} value={value}>
      <Box display={'flex'} justifyContent='space-evenly' w='50%' >
        <Radio value='1'>Male</Radio>
        <Radio value='2'>Female</Radio>
      </Box>
    </RadioGroup>
					</Box>

					<Box className="tallSubBox">
						<Heading fontSize="20px" mb="10px">
							How much do you weigh?
						</Heading>
						<Text color="#A0A0A0" mb="10px">
							It's OK to estimate. You can update this later.
						</Text>
						<InputGroup>
							<Input placeholder="Enter weight (kg)" w="550px" />
							<InputRightElement children={"kg"} />
						</InputGroup>
					</Box>

					<Box className="tallSubBox">
						<Heading fontSize="20px" mb="10px">
							What's your goal weight?
						</Heading>
						<Text color="#A0A0A0" mb="10px">
							Don't worry. This doesn't affect your daily calorie goal and you
							can always change it later.
						</Text>
						<InputGroup>
							<Input placeholder="Enter weight (kg)" w="550px" />
							<InputRightElement children={"kg"} />
						</InputGroup>
					</Box>

					<Flex gap="20px">
						<Button colorScheme="blue" variant="outline" w="150px" fontSize="18px"
						onClick={() => navigate("/signupActivity")}>
							BACK
						</Button>
						<Button bg="#0066EE" color="white" w="150px" fontSize="18px" onClick={() => navigate("/signupWeekly")}>
							NEXT
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
  
}

export default SignupBirth