import { Box, Button, FormControl, Input, VStack } from "@chakra-ui/react"
import React from "react"
import axios from "axios"
import { Loginuser } from "./loginuser"
import { Link } from "react-router-dom"


export const Login=()=>{
  const[password,setPassword] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [auth,setAuth] = React.useState('false')
  const [loading,setLoading] = React.useState('false')
  const [token,setToken] = React.useState('')
  const [err,setErr]  = React.useState('false')
  const handlesubmit=(e)=>{
   e.preventDefault()
    setLoading(true)
    setErr(false)
    Loginuser({email,password}).then((res)=>{
        setAuth(true)
       
        
        setToken(res.data.token)

        console.log(res.data.token)
    }).catch((err)=>{
          setLoading(false)
         
          setErr(true)
    }).finally(()=>{
         
    })
  }
  if(auth){
    return (
      <>
      <h1>Welcome to Dashboard</h1>
      <h1>token:{token}</h1>
      <Link to='/'></Link>
      </>
    )
    
  }
  
   return (
        <>
        <Box width='9cm' margin='auto' spacing='2' marginTop='4cm' boxShadow={8}>
       
        <form onSubmit={handlesubmit} >
            <VStack spacing={2}>
            <Input  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></Input>
            <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></Input>
            <Input type='submit'></Input>
            </VStack>
           
        </form>
        </Box>
       
       </> 
    )
    
}