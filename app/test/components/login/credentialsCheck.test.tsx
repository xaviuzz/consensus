import { render, screen } from "@testing-library/react"
import React from "react"
import CredentialsCheck from '../../../src/components/login/CredentialsCheck'
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils"

describe("Credentials Check", () => {
  it("is disabled at start", () => {
    SUT.render()
    expect(SUT.submitButton()).toBeDisabled()
  })

  it("is not disabled when all fields are filled", async () => {
    SUT.render()
    await SUT.fill('a login','a password')
    expect(SUT.submitButton()).not.toBeDisabled()
  })
   
  it("does not consider all spaces value", async () => {
    SUT.render()
    await SUT.fill('         ','       ')
    expect(SUT.submitButton()).toBeDisabled()
  })


})

class SUT {

  static render() {
    render(<CredentialsCheck/>)
  }

  static submitButton(){
    return screen.getByText('identity.action')
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