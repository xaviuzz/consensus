import React, { useState } from 'react'

interface IdentityContextAPI {
  handle: string,
  setHandle: (handle:string)=>void
}

const IdentityContext = React.createContext<IdentityContextAPI>({
  handle: '',
  setHandle: (handle:string)=>{handle}
})

interface withIdentityProps {
  children: React.ReactNode
}

const WithIdentity: React.FC<withIdentityProps> = ({ children }) => {
  const [handle, setHandle] = useState<string>('')
  

  const value: IdentityContextAPI = {
    handle,setHandle
  }

  return <IdentityContext.Provider value={value}>{children}</IdentityContext.Provider>
}

function useIdentity() {
  const context = React.useContext(IdentityContext)
  if (context === undefined) {
    throw new Error('useIdentity must be used within a <WithIdentity>')
  }
  return context
}

export { WithIdentity, useIdentity }