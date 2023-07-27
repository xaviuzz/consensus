import { ArrowForwardIcon, NotAllowedIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

interface SubmitProps{
  ready:boolean
}

const Submit: React.FC<SubmitProps> = ({ready}) => {
  const {t}=useTranslation()
  
  const submitIcon = () => {
    if (!ready) return (<NotAllowedIcon />)
    return <ArrowForwardIcon />
  }
  return (
    <Button rightIcon={submitIcon()} isDisabled={!ready}>
      {t('identity.action')}
    </Button>
  )
}

export default Submit