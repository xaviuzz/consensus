import React from 'react'
import RequireIdentity from '../guards/RequireIdentity'
import '../infrastructure/i18n'

const Agora: React.FC = () => {

  return (
    <>
      <RequireIdentity />
      <h1>Agora</h1>
    </>
  )
}
export default Agora