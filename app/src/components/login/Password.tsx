import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface PasswordProps{
  setPassword:(value:string)=>void
}

const Password:React.FC<PasswordProps>=({setPassword})=>{
  const [show, setShow] = useState<boolean>(false)
  const { t } = useTranslation()
  const passType = (): string => {
    if (!show) return 'password'
    return 'text'
  }

  const passLabel = (): string => {
    if (!show) return t('password.show')
    return t('password.no.show')
  }

  const passIcon = () => {
    if (!show) return (<ViewIcon />)
    return <ViewOffIcon />
  }

  const toggle = (): void => {
    setShow(!show)
  }
  return (
    <InputGroup>
        <Input
          type={passType()}
          placeholder={t('password.placeholder') as string}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <InputRightElement>
          <IconButton
            onClick={toggle}
            aria-label={passLabel()}
            icon={passIcon()}
          />
        </InputRightElement>
      </InputGroup>
  )
}

export default Password