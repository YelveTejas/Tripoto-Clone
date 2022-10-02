
import { Avatar, Badge, Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React,{useState} from "react"
import { Footer } from "../parts/Footer";
import axios from "axios";
import { Link } from "react-router-dom";


export const Retreats=()=>{
  const [data,setdata] = useState([])
  const [loading,setLoading]=  useState(false)
  React.useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3007/products`)
    .then((res)=>{
      setLoading(false)
      setdata(res.data)
      console.log(res.data)
    })
  },[])

    return (
        <>
            <Image boxSize='100%'   height='13cm'src='https://cdn1.tripoto.com/media/transfer/img/1789711/Image/1656336375_offbeat_places_2_1.gif' alt='loading'/>
            <Box width='80%' margin='auto' marginTop='1cm'>
               <Text align='left' fontWeight='medium' fontSize='3xl'>Travel and Learn with Tripoto's mindful Retreats </Text>
             </Box>
          <Box width='80%'  margin='auto' marginTop='1cm'>
              <Grid
           w='full'
           templateColumns={{base:'repeat(1,fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}}
           gap={3}
           >
            {
              data.map((e)=>{
               return  <GridItem key={e.id}>
                   <VStack>
                    <Box>
                    <img src={e.img} alt='photo'></img>
                    </Box>
                    <Text  align='left' color='teal.500'>PACKAGE</Text>
                    
                    <Text fontSize='1xl' color='black' fonrWeight='large'  align='left'>{e.title}</Text>
                    <HStack spacing='5.3cm'>
                      <h3 >{e.location}</h3> 
                      <Badge variant='solid' ml='1' px='1' py='1' bg='teal.500' borderRadius='2xl' colorScheme='teal.500' width='-moz-fit-content'>{e.badge}</Badge>
                    </HStack>
                    <HStack spacing='7cm' >
                         <Text>₹{e.price}</Text>
                       <Link to={`/booking/${e.id}`}>
                       <Button size='sm' variant='outline'>Book Now</Button>
                       </Link>
                    </HStack>
                    
                    <HStack >
                      <Avatar size='sm' src={e.logo}/>
                      <Text>{e.name}</Text>
                    </HStack>
                         
                   </VStack>
                </GridItem>
              })
            }
           </Grid>
         </Box>
            
            <Footer/>
        </>
    ) 
}

