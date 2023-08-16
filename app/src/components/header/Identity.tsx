import { Avatar } from "@chakra-ui/react"
import React from "react"
import { useIdentity } from "../../context/identity"


const Identity: React.FC = () => {
  const {handle}=useIdentity()
  
  if (!handle) return(<></>)
  return (
    <Avatar name={handle}/>
  )
}

export default Identity