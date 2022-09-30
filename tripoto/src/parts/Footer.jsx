import { Avatar, Badge, Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";


export const Footer=()=>{
    return  <Box display='flex' justifyContent='space-around' p='20px'>
    <VStack marginTop='1cm' height='9cm'>
         <Image src='https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg'/>
         <Text>Indias Largest Community</Text>
         <Divider marginTop='0.5cm'></Divider>
         <Box width='7cm' display='flex' justifyContent='space-around' >
              <Avatar size='sm' src='data:image/png;base64,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'></Avatar>
              <Avatar size='sm' src='https://t4.ftcdn.net/jpg/03/92/71/99/240_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg'></Avatar>
              <Avatar size='sm' src='data:image/jpeg;base64,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'></Avatar>

         </Box>

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