import { Input, VStack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Password from "./Password"
import Submit from './Submit'

const CredentialsCheck: React.FC = () => {
  const { t } = useTranslation()
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
  
  return (
    <VStack>
      <Input 
        placeholder={t('login.placeholder') as string} 
        onChange={(e)=>{setLogin(e.target.value)}}
      />
      <Password setPassword={setPassword}/>
      <Submit ready={ready}/>
    </VStack>

  )
}

export default CredentialsCheck