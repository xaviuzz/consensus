import { ArrowForwardIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface SubmitProps{
  ready:boolean,
  onClick:()=>void
}

const Submit: React.FC<SubmitProps> = ({ready,onClick}) => {
  const {t}=useTranslation()
  
  const submitIcon = () => {
    if (!ready) return (<NotAllowedIcon />)
    return <ArrowForwardIcon />
  }
  return (
    <Button 
      rightIcon={submitIcon()}
      isDisabled={!ready}
      onClick={()=>onClick()}
    >
      {t('identity.action')}
    </Button>
  )
}

export default Submit