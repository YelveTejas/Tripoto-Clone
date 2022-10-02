import { Avatar, Badge, Box, Button, Divider, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const details=(id)=>{
    return fetch(`http://localhost:3007/products/${id}`)
    .then((res)=>
        res.json()
    )
}
const Booking = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const {id} = useParams()
    
   useEffect(()=>{
    setLoading(true)
    details(id).then((res)=>{
         setData(res)
         console.log(res)
        setLoading(false)
    })
   },[id])

  return (
        <>
        <Box display='flex' width='80%' margin='auto' justifyContent='space-between'>
            <VStack align='left'>
            <img width='78%' src={data.img}>
           
            </img>
            <Text width='78%' align='left' fontSize='20'  fontWeight='bold'>{data.title}</Text>
            <HStack align='left'>
           <Avatar a size='sm' src={data.logo}/>
           <Text>{data.name}</Text>
             </HStack>
             <  Divider/>
             <HStack align='left' >
             <Badge   variant='solid' ml='1' px='1' py='1' bg='teal.500' width='2cm'>{data.badge}</Badge>
             </HStack>
            <Text align='left' fontWeight='medium' >Location:{data.location}</Text>
            <Text align='left'fontWeight='semibold'>Over View</Text>
          
            </VStack>
        
        <form>
            <VStack spacing={3} px='1'py='3' position='sticky' shadow={2}>
                <FormLabel>Enter Your details and Procced to Book</FormLabel>
            <Input placeholder='name'></Input>
            <Input placeholder='Email'></Input>
            <Input placeholder='Contact Number'></Input>
            <Input placeholder='Departure City'></Input>
            <Input placeholder='Check In Date'></Input>
            <Box display='flex'>
                <h1 align='left'>Amount :</h1>
                <h1>{data.price}</h1>
            </Box>
            
            <Button width='100%' bg='#00B5D8' >Book</Button>

            </VStack>
           
            </form>   
        </Box >
        </>
  )
}

export default Booking