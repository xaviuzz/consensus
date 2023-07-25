import React from "react"
import '../infrastructure/i18n'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "../components/Header"
import RequireIdentity from "../guards/RequireIdentity"

const Agora: React.FC = () => {

  return (
    <ChakraProvider>
      <RequireIdentity/>
      <Header /> 
    </ChakraProvider>
  )
}
export default Agora