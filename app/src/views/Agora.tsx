import React from "react"
import RequireIdentity from "../guards/RequireIdentity"
import '../infrastructure/i18n'

const Agora: React.FC = () => {

  return (
    <RequireIdentity />
  )
}
export default Agora