import React from "react"
import './infrastructure/i18n'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header"

const App: React.FC = () => {

  return (
    <ChakraProvider>
      <Header /> 
    </ChakraProvider>
  )
}
export default App
