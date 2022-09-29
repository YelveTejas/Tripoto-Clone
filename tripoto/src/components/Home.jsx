import { Avatar, Badge, Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {Footer} from '../parts/Footer'




const Home=()=>{
    return(
        <>
           <Box position='absolute' margin='auto' >
               <h1 color="white" position='absolute'>Indias Largest Community of Travellers</h1>
           <Input type='search'  position='absolute'  backgroundColor='white' width='13cm' marginTop='3cm'></Input>
           </Box>
       
     <Image boxSize='100%'   height='13cm'src='https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='loading'/>
         <HStack maxW='90%' spacing='30px'   margin='auto' marginTop='2cm' marginLeft='5cm'>
          
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'/>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'></Image>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'/>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'></Image>
           
            </HStack> 
            <Box width='80%' margin='auto'  marginTop='1cm'>
            <Text align='left' fontWeight='medium' fontSize='3xl'>In the SpotLight Partnership</Text>
            </Box>
             <HStack  width='80%' margin='auto' marginTop='1cm' spacing={1}>
             <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663242404_1662994966_gostops_ooty_1.jpg' alt='image'/>
               <Text align='left'p='10px' as='b' color='orange.500'>GOSTOPS</Text>
               <Text align='left' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg' alt='image'/>
               <Text align='left'p='10px' as='b' color='orange.500'>SINGAPORE TOOURISM BOARD</Text>
               <Text align='left' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg' alt='image'/>
               <Text align='left'p='10px' as='b' color='orange.500'>GOSTOPS</Text>
               <Text align='left' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg' alt='image'/>
               <Text align='left'p='10px' as='b' color='orange.500'>GOSTOPS</Text>
               <Text align='left' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
             </HStack>
             <Box width='80%' margin='auto' marginTop='-3cm'>
            <Text align='left' fontWeight='medium' fontSize='3xl'>Find the Best Places To Visit In India in October and November</Text>
            </Box>
             <HStack  width='80%' margin='auto' marginTop='1cm' spacing={1}>
             <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm'  width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507443_1633009115_243257387_1788683618007971_2371564452838209440_n_webp.jpg' alt='image'/>
            
               <Text align='left' as='b' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282144_1656415934_pxl_20211127_110043484_mp_3_smaller.jpg' alt='image'/>
               
               <Text align='left' as='b' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>
                 

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282377_1556098119_bara_mangwa_1.jpg' alt='image'/>
    
               <Text  align='left' as='b' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282484_1584373060_84357577_214370566369460_473810992900713292_n.jpg' alt='image'/>
              
               <Text align='left' as='b' p='10px'>This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats</Text>

          </Stack>
             </HStack>
          <Box width='80%' margin='auto' marginTop='-2cm'>
          <Image width='100%'  src='https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1664274138_2_3_1.jpg' alt='error'/>
          <Text align='left'>We love travelling because our planet is vivid, variegated and beautiful. The theme of World Tourism Day this year is Rethinking Tourism. We must step up now to bring about impactful and sustainable change. </Text>
          </Box>
           
          <HStack  width='80%' margin='auto' marginTop='2cm' spacing={1}>
             <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm'  width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366571_tent_1.jpg' alt='image'/>
            
               <Text align='left' as='b' p='10px'>Watch: Working With Locals At Nayalap</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image  height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366418_north.jpg' alt='image'/>
               
               <Text align='left' as='b' p='10px'>Watch: Reviving Kath Kuni Architecture With NORTH</Text>
                 

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274477_green_escape.jpeg' alt='image'/>
    
               <Text  align='left' as='b' p='10px'>Watch Green Escapes: An Unparalleled Road Trip Across India Done Responsibly</Text>

          </Stack>
          <Stack width='320px' height='450px' spacing={0}>
               <Image height='5cm' width='7cm' borderRadius='2xl' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg' alt='image'/>
              
               <Text align='left' as='b' p='10px'>9 Traditional Sustainable Practices In India That We Must Revive To Save The Planet</Text>

          </Stack>
             </HStack>
             <Box width='80%' margin='auto' marginTop='-4cm'>
               <Text align='left' fontWeight='medium' fontSize='3xl'>Travel and Learn with Tripoto's mindful Retreats </Text>
             </Box>
             <HStack width='80%' margin='auto' spacing={8}>
             <Stack maxW='10cm'>
               <Image width='100%' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'/>
               <Text align='left' color='teal.500'>PACKAGE</Text>
               <Text fontSize='1xl' color='black' fonrWeight='large'  align='left'>Learn Sketching & Go on Guided Forest Walks  the Himalayan Trails | Cosmic Geeks, Dharamkot</Text>
               <Box display='flex' justifyContent='space-between'>
                <h3>HIMACHAL PRADESH</h3>
                <Badge variant='solid' ml='1' bg='teal.500' borderRadius='2xl' colorScheme='teal.500' width='2cm'>3D.2N</Badge>
               </Box>
               <Box display='flex' justifyContent='space-between'>
                   <Text> ₹ 7000</Text> 
                   <Button size='sm' variant='outline'>Book Now</Button>
               </Box>
               <HStack>
                    <Avatar size='sm' src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg'></Avatar>
                    <Text>Tripoto's Mindful Retrats</Text>
               </HStack>
               
             </Stack>
             <Stack maxW='10cm'>
               <Image width='100%' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg'/>
               <Text align='left' color='teal.500'>PACKAGE</Text>
               <Text fontSize='1xl' color='black' fonrWeight='large'  align='left'>Learn Sketching & Go on Guided Forest Walks  the Himalayan Trails | Cosmic Geeks, Dharamkot</Text>
               <Box display='flex' justifyContent='space-between'>
                <h3>KOKAN</h3>
                <Badge variant='solid' ml='1' bg='teal.500' borderRadius='2xl' colorScheme='teal.500' width='2cm'>3D.2N</Badge>
               </Box>
               <Box display='flex' justifyContent='space-between'>
                   <Text> ₹ 9000</Text> 
                   <Button size='sm' variant='outline'>Book Now</Button>
               </Box>
               <HStack>
                    <Avatar size='sm' src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg'></Avatar>
                    <Text>Tripoto's Mindful Retrats</Text>
               </HStack>
               
             </Stack>
             <Stack maxW='10cm'>
               <Image width='100%' src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1662966110_image_cover_2.jpg'/>
               <Text align='left' color='teal.500'>PACKAGE</Text>
               <Text fontSize='1xl' color='black' fonrWeight='large'  align='left'>Learn Sketching & Go on Guided Forest Walks  the Himalayan Trails | Cosmic Geeks, Dharamkot</Text>
               <Box display='flex' justifyContent='space-between'>
                <h3>KASHMIR</h3>
                <Badge variant='solid' ml='1' bg='teal.500' borderRadius='2xl' colorScheme='teal.500' width='2cm'>4D.3N</Badge>
               </Box>
               <Box display='flex' justifyContent='space-between'>
                   <Text> ₹ 10000</Text> 
                   <Button size='sm' variant='outline'>Book Now</Button>
               </Box>
               <HStack>
                    <Avatar size='sm' src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg'></Avatar>
                    <Text>Tripoto's Mindful Retrats</Text>
               </HStack>
               
             </Stack>
             </HStack>

             <Box width='80%' margin='auto' marginTop='1cm'>
             <Text align='left' fontSize='3xl'> In the Spot Light Tripoto Creaters of the Month</Text>
             </Box>
             <HStack width='80%' margin='auto'>
             <Image width='32%' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660286748_12.jpg'></Image>
             <Image width='32%' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290817_13.jpg'></Image>
             <Image width='32%' src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290935_11.jpg'></Image>
             </HStack>

             < Divider/>
          <Footer/>
            
        </>
        
    )
}

export default Home