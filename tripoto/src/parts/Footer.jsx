import { Avatar, Badge, Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";


export const Footer=()=>{
    return  <Box display='flex' justifyContent='space-around' p='20px'>
    <VStack marginTop='1cm' height='12cm'>
         <Image src='https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg'/>
         <Text>Indias Largest Community</Text>
         
         <HStack width='7cm' align='left' >
              <Avatar size='sm' src='https://www.shutterstock.com/image-photo/valencia-spain-march-05-2017-600w-593204357.jpg'></Avatar>
              <Avatar size='sm' src='https://www.shutterstock.com/image-vector/camera-icon-social-media-sign-600w-1670879974.jpg'></Avatar>
              <Avatar size='sm' src='https://www.shutterstock.com/image-vector/linkedin-american-business-icon-logo-600w-1779645701.jpg'></Avatar>
             
         </HStack>

    </VStack>
    <VStack marginTop='1cm'>
         <Text fontSize='2xl'>About </Text>
         <Text>How It Works</Text>
         <Text>FAQ</Text>
         <Text>Privacy Policy</Text>
         <Text>Termas & Condition</Text>
    </VStack>
    <VStack marginTop='1cm'>
         <Text fontSize='2xl'>Product</Text>
         <Text>Tour Pacakages</Text>
         <Text>Trips & Itineranies</Text>
         <Text>Weekend & Getways</Text>
         <Text>Places to Visit</Text>
         <Text>Other Travel Categories</Text>
         <Text> Tripoto Forum</Text>
    </VStack>
    <VStack marginTop='1cm'>
         <Text fontSize='2xl'>Goa Tourism</Text>
         <Text>Dubai Tourism</Text>
         <Text>Singapore  Tourism</Text>
         <Text>Kearal  Tourism</Text>
         <Text> Maharashatra  Tourism</Text>
    </VStack>
    <VStack marginTop='1cm'>
         <Text fontSize='2xl'>Partner Programs</Text>
         <Text>Buy Travel Leads</Text>
         <Text> Earn Credits</Text>
         <Text> Get Paid to Travel</Text>
         <Text>Important Blog to Itinery</Text>
         <Text></Text>
    </VStack>
  </Box>
}