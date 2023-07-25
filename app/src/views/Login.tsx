import { Box, ChakraProvider } from "@chakra-ui/react"
import React from "react"
import CredentialsCheck from "../components/CredentialsCheck"

const Login:React.FC=()=>{
  return (
  <ChakraProvider>
    <Box 
      minW={'95vw'} 
      minH={'95vh'} 
    >
      <Box m={'auto'} w={"sm"} h={'sm'} borderWidth={'5px'}>
        <CredentialsCheck/> 
      </Box>
    </Box>
  </ChakraProvider>
)
}

export default Login