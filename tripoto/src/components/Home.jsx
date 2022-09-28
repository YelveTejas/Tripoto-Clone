import { Box, Container, Flex, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";




const Home=()=>{
    return(
        <>
         
     <Image boxSize='100%' height='13cm' src='https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='loading'/>
         <HStack maxW='90%' spacing='30px' margin='auto' marginTop='2cm'>
          
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'/>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'></Image>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'/>
                <Image boxSize='20%' src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'></Image>
           
            </HStack> 
             <Text  as='b' fontSize='3xl'>In the spot light Partner ship</Text>

        </>
       
    )
}

export default Home