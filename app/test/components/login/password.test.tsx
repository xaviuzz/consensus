import { render, screen } from "@testing-library/react"
import React from "react"
import Password from '../../../src/components/login/Password'

describe("password", () => {
  it.skip("is not readable", () => {
    SUT.render()
    expect(screen.getByRole('textbox')).toHaveAttribute('type','password')
  })
})

class SUT {
  static render() {
    render(<Password setPassword={()=>{}}/>)
  }
}