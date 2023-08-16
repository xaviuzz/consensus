import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import React from "react"
import { useIdentity } from "../../context/identity"
import Stash from "../../infrastructure/stash"
import { useNavigate } from "react-router-dom"
import Settings from "../../infrastructure/settings"
import { useTranslation } from "react-i18next"


const Identity: React.FC = () => {
  const {handle,setHandle}=useIdentity()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const logout=()=>{
    setHandle('')
    Stash.deleteToken()
    navigate(Settings.loginPath())
  }

  if (!handle) return(<></>)
  return (
    <Menu>
  <MenuButton >
    <Avatar name={handle}/>
  </MenuButton>
  <MenuList>
    <MenuItem onClick={logout}>{t('logout.action')}</MenuItem>
  </MenuList>
</Menu>
  )
}

export default Identity