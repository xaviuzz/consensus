import { Box } from "@chakra-ui/react"
import React from "react"
import CredentialsCheck from "../components/login/CredentialsCheck"

const Login: React.FC = () => {
  return (
    <Box
      m={'auto'}
      w={'sm'}
      borderWidth={'5px'}
      marginTop={'10vh'}
      p={'2em'}
    >
      <CredentialsCheck />
    </Box>
  )
}

export default Login