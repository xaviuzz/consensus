import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Settings from "../infrastructure/settings"
import Identity from "../services/Identity"

const RequireIdentity:React.FC=()=>{
  const navigate = useNavigate()

  useEffect(() => {
    const logged:boolean  = Identity.isIdentified()
    if (!logged) navigate(Settings.loginPath())
  }, [])

  return <></>
}

export default RequireIdentity