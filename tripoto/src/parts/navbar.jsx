import React from "react";
import { Container, Spacer,Box, Flex,ButtonGroup,Text, Image, Select, HStack, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, Portal, Button,PopoverBody, List, ListItem } from '@chakra-ui/react'
import Allroute from "../components/allroute";
import {Link} from 'react-router-dom'

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
      {/* <Select variant='unstyled' width='100%' placeholder='Inspiration' color='black' borderBlockEndColor='none'>
  <option value='option1'>View Singapore</option>
  <option value='option2'>Beaches</option>
  <option value='option3'>Mountains</option>
  </Select> */}
      <Popover>
  <PopoverTrigger>
    <Text>Inspiration</Text>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverBody>
        <List>
            <ListItem>Visit Singapore</ListItem>
            <ListItem> Beaches</ListItem>
            <ListItem>Moutains</ListItem>
            <ListItem>Heritage</ListItem>
            <ListItem>Road Trips </ListItem>
            <ListItem>Luxury Travel</ListItem>
        </List>
      </PopoverBody>
    
    </PopoverContent>
  </Portal>
</Popover>
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