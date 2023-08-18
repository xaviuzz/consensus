import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Agora from './views/Agora'
import Login from './views/Login'
import Settings from './infrastructure/settings'
import Header from './components/header/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { WithIdentity } from './context/identity'
const App: React.FC = () => {

  return (
    <ChakraProvider>
      <WithIdentity>
        <Box
          minW={'95vw'}
          minH={'95vh'}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path={Settings.loginPath()} element={<Login />} />
              <Route path="/agora" element={<Agora />} />
              <Route path="/" element={<Agora />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </WithIdentity>
    </ChakraProvider>
  )
}
export default App
