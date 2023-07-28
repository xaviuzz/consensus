import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Agora from "./views/Agora"
import Login from "./views/Login"
import Settings from "./infrastructure/settings"
import Header from "./components/Header"
import { Box, ChakraProvider } from "@chakra-ui/react"
const App: React.FC = () => {

  return (
    <ChakraProvider>
      <Box
        minW={'95vw'}
        minH={'95vh'}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={Settings.loginPath()} element={<Login />} />
            <Route path="/agora" element={<Agora />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}
export default App
