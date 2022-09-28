import React from "react";
import { Container, Spacer,Box, Flex,ButtonGroup,Text, Image,Link, Select, HStack } from '@chakra-ui/react'
import Allroute from "../components/allroute";

export const Navbar=()=>{
    return (
        <>
        <Container maxW='9xl' bg='#00B5D8'>
       <Flex minWidth='max-content' alignItems='center' gap='2' color='white'>
  <Box p='2'>
    <HStack spacing={4}>
    <Image boxSize='50px' src='https://play-lh.googleusercontent.com/P6IAUnZ_W081-DmopltYHl9VaKg6T791mEweKns8mQMUOxySEniRgSGUFWBl82GSx-M=w240-h480-rw' alt='abd'/>
    <Text as='b' fontSize='2xl' color='black'>Tripoto</Text>
    </HStack>
    
  </Box>
  <Spacer />
  <ButtonGroup gap='6'>
      <Box w='-moz-fit-content'>
      <Select width='100%' placeholder='Inspiration' color='black' borderBlockEndColor='none'>
  <option value='option1'>View Singapore</option>
  <option value='option2'>Beaches</option>
  <option value='option3'>Mountains</option>
  </Select>
      </Box>
    <Text>Forum</Text>
    <Text>Pakages</Text>
    <Text>Publick Trip</Text>
    <Link to='/login'>Log in</Link>
    <Link to='/details'>details</Link>

  </ButtonGroup>
   </Flex>
        </Container>
   
        </>
    )
}