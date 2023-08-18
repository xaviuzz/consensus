import React from 'react'
import { useTranslation } from 'react-i18next'
import Settings from '../../infrastructure/settings'
import { Box, Heading, Text } from '@chakra-ui/react'
import Identity from './Identity'


const Header: React.FC = () => {

  const { t } = useTranslation()
  return (
    <Box as='header'>
      <Heading as='h1'>
        {Settings.appName()}
      </Heading>
      <Text>{t('app.description')}</Text>
      <Identity/>
    </Box>
    
  )
}

export default Header

