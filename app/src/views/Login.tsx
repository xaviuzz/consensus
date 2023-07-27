import { Box, ChakraProvider } from "@chakra-ui/react"
import React from "react"
import CredentialsCheck from "../components/login/CredentialsCheck"
import Header from "../components/Header"

const Login:React.FC=()=>{
  return (
  <ChakraProvider>
    <Box 
      minW={'95vw'} 
      minH={'95vh'} 
    >
      <Box 
        m={'auto'} 
        w={"sm"} h={'sm'} 
        borderWidth={'5px'}
        marginTop={'10vh'}
        p={'2em'}
      >
        <Header/>
        <CredentialsCheck/> 
      </Box>
    </Box>
  </ChakraProvider>
)
}

export default Login