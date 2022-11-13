import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupActivity = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/signupBirth");
	};
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper"  height={'max-content'} padding='1rem'>
				<Box className="insideBox" h="fit-content" p="20px"  margin={'auto'} w={{base:'80%',md:'60%',lg:'40%'}}>
					<Heading fontSize="22px" mt='2.5rem'>
						What is your baseline activity level?
					</Heading>
					<Text color="gray" mb="20px">
						Not including workouts–we count that separately
					</Text>

					<Button
						colorScheme="black"
						variant="outline"
						w="100%"
						my="10px"
						h="fit-content"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						mb="10px"
						_hover={{color:'blue',borderColor:'blue',border:'2px'}}	
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left" w="100%" _hover={{color:'blue'}} h='max-content' overflow={'auto'}>
							<Text fontSize="16px" fontWeight={'400'} color="black" _hover={{color:'blue'}}>
								Not Very Active
							</Text>
							<Text fontSize="14px" color="#909090" fontWeight={'400'} lineHeight='1.5rem'>
								Spends most of the day sitting
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., bankteller, desk job)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						mb="10px"
						_hover={{color:'blue',borderColor:'blue',border:'2px'}}
						w="100%"
						h="max-content"
						onClick={handleClick}
					>
						<Box padding="5px" textAlign="justify" w='100%'
						overflow={'auto '}
						_hover={{color:'blue'}} h='max-content'>
							<Text fontSize="16px" fontWeight={'400'} h='max-content' w='max-content' color="black" _hover={{color:'blue'}}>
								Lightly Active
							</Text>
							<Text fontSize="14px" color="#909090" fontWeight={'400'} w='100%' h='max-content' lineHeight='1.5rem' >
								Spends a considerably good part of the day on your feet
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., teacher, salesperson)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						w="100%"
						mb="10px"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						_hover={{color:'blue',borderColor:'blue',border:'2px'}}
						
						h="fit-content"
						onClick={handleClick}
					>
						<Box padding="5px" textAlign="justify" w='100%'
						overflow={'auto '}
						_hover={{color:'blue'}} h='max-content' >
							<Text fontSize="16px" fontWeight={'400'} w='100%' color="black" _hover={{color:'blue'}}>
								Active
							</Text>
							<Text fontSize="14px" color="#909090" fontWeight={'400'} lineHeight='1.5rem'>
								Spend a good part of the day doing some physical activity
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., food server, postal carrier)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						
						variant="outline"
						w="100%"
						mb="20px"
						borderRadius={'0'}
						borderColor='grey'
						color='grey'
						_hover={{color:'blue',borderColor:'blue',border:'2px'}}
						h="fit-content"
						onClick={handleClick}
					>
						<Box padding="5px" textAlign="justify" w='100%'
						overflow={'auto '}
						_hover={{color:'blue'}} h='max-content' >
							<Text fontSize="1rem" fontWeight={'400'} color="black" _hover={{color:'blue'}}>
								Very Active
							</Text>
							<Text fontSize="14px" color="#909090" fontWeight={'400'} lineHeight='1.5rem'>
								Spend a good part of the day doing heavy physical activity
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., bike messenger, carpenter)
							</Text>
						</Box>
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupActivity;

// /signupActivity
