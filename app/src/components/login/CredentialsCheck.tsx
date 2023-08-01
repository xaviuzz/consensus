import { Input, VStack, useToast } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Password from "./Password"
import Submit from './Submit'
import Identity from "../../services/Identity"
import Helper from "../shared/helper"

const CredentialsCheck: React.FC = () => {
  const { t } = useTranslation()
  const toast = useToast()
  const [ready,setReady]=useState<boolean>(false)
  const [login,setLogin]=useState<string>('')
  const [password,setPassword]=useState<string>('')

  useEffect(()=>{
    setReady(amIValid())
  },[login,password])

  const amIValid=():boolean=>{
    const loginOk = notEmpty(login)
    const passOk = notEmpty(password)
    return loginOk && passOk
  }
  
  const notEmpty=(target:string):boolean=>{
    return !(target.trim() == '')
  }

  const check= async ()=>{
    const token = await Identity.check(login,password)
    Helper.showError(toast,t('identity.failed'))
  }
  
  return (
    <VStack>
      <Input 
        placeholder={t('login.placeholder') as string} 
        onChange={(e)=>{setLogin(e.target.value)}}
      />
      <Password setPassword={setPassword}/>
      <Submit ready={ready} onClick={check}/>
    </VStack>

  )
}

export default CredentialsCheck