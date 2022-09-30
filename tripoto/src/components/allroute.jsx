import { Container, Spacer,Box, Flex, Heading, ButtonGroup,Text, Image } from '@chakra-ui/react'
import {Routes,Route,Link} from 'react-router-dom'

import { Details } from './details'
import Home from './Home'
import { Login } from './login'
import {Retreats} from './Retreats'



 function Allroute(){
    return(
      <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
            <Route path='/retreats' element={<Retreats/>}></Route>
        </Routes> 
       </> 
    ) 
}

export default Allroute