import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import CredentialsCheck from '../../../src/components/login/CredentialsCheck'
import Helper from '../../../src/components/shared/helper'
import Identity from '../../../src/services/Identity'
import { WithIdentity } from '../../../src/context/identity'

const checkSpy = vi.spyOn(Identity,'check')
const errorSpy = vi.spyOn(Helper,'showError')
const navigateSpy = vi.fn()

vi.mock('react-router-dom', () => {
  const actual = vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate:() => navigateSpy
  }
})

describe('Credentials Check', () => {
  const aLogin = 'a login'
  const aPassword = 'a password'
   
  it('is disabled at start', () => {
    SUT.render()
    expect(SUT.submitButton()).toBeDisabled()
  })

  it('is not disabled when all fields are filled', async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    expect(SUT.submitButton()).not.toBeDisabled()
  })
   
  it('does not consider all spaces value', async () => {
    SUT.render()
    const blanks = '         '
    await SUT.fill(blanks,blanks)
    expect(SUT.submitButton()).toBeDisabled()
  })

  it('calls login endpoint at submit', async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiUmFpbmJvd3JhcHRvciIsImlhdCI6MTY5MjE4NzY2MH0.H-AjNrpN6gtZkMnlof_NVVFkJNBbMlMSbDIQESdSdUg'
    checkSpy.mockResolvedValueOnce(token)
    await SUT.submit()
    expect(checkSpy).toHaveBeenCalledWith(aLogin,aPassword)
  })

  it('displays an error message when bad credentials', async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    checkSpy.mockResolvedValueOnce('')
    await SUT.submit()
    expect(errorSpy).toHaveBeenCalledWith(expect.any(Function),'identity.failed')
  })

})

class SUT {

  static render() {
    render(
      <MemoryRouter>
        <WithIdentity>
          <CredentialsCheck/>
        </WithIdentity>
      </MemoryRouter>
    
    )
  }

  static submitButton(){
    return screen.getByText('identity.action')
  }

  static errorMessage(){
    return screen.getByText('identity.failed')
  }

  static async submit(){
    await act(async()=>{
      await userEvent.click(this.submitButton())
    })
  }

  static async fill(login:string,password:string){
    await act(async()=>{
      await this.fillLogin(login)
      await this.fillPassword(password)
    })
  }

  static async fillLogin(value:string){
    await userEvent.type(screen.getByPlaceholderText('login.placeholder'),value)
  }

  static async fillPassword(value:string){
    await userEvent.type(screen.getByPlaceholderText('password.placeholder'),value)
  }   
}