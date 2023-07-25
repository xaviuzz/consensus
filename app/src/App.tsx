import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Agora from "./views/Agora"
import Login from "./views/Login"
import Settings from "./infrastructure/settings"
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Settings.loginPath()} element={<Login />} />
        <Route path="/agora" element={<Agora />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
