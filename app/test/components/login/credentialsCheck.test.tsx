import { render, screen } from "@testing-library/react"
import React from "react"
import CredentialsCheck from '../../../src/components/login/CredentialsCheck'
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils"
import {vi} from 'vitest'
import Identity from "../../../src/services/Identity"
import Helper from "../../../src/components/shared/helper"
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom"

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

describe("Credentials Check", () => {
  const aLogin = 'a login'
  const aPassword = 'a password'

  it("is disabled at start", () => {
    SUT.render()
    expect(SUT.submitButton()).toBeDisabled()
  })

  it("is not disabled when all fields are filled", async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    expect(SUT.submitButton()).not.toBeDisabled()
  })
   
  it("does not consider all spaces value", async () => {
    SUT.render()
    const blanks = '         '
    await SUT.fill(blanks,blanks)
    expect(SUT.submitButton()).toBeDisabled()
  })

  it("calls login endpoint at submit", async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    checkSpy.mockResolvedValueOnce('token')
    await SUT.submit()
    
    expect(checkSpy).toHaveBeenCalledWith(aLogin,aPassword)
  })

  it("displays an error message when bad credentials", async () => {
    SUT.render()
    await SUT.fill(aLogin,aPassword)
    checkSpy.mockResolvedValueOnce('')
    await SUT.submit()
    expect(errorSpy).toHaveBeenCalledWith(expect.any(Function),'identity.failed')
  })
  
  it.skip("Navigates to home when credentials check", async () => {
    SUT.render()
    checkSpy.mockResolvedValueOnce('a valid token')
    await act(async()=>{
      await SUT.fill(aLogin,aPassword)
      await SUT.submit()
    })
    expect(navigateSpy).toHaveBeenCalled()
  })

})

class SUT {

  static render() {
    render(
    <MemoryRouter>
      <CredentialsCheck/>
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
    await userEvent.click(this.submitButton())
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