import { render, screen } from "@testing-library/react"
import React from "react"
import Submit from '../../../src/components/login/Submit'

describe("submit", () => {
  it("is disabled when not ready", () => {
    SUT.render(false)
    expect(SUT.button()).toBeDisabled()
  })
  
  it("is not disabled when ready", () => {
    SUT.render(true)
    expect(SUT.button()).not.toBeDisabled()
  })

})

class SUT {

  static render(ready:boolean) {
    render(<Submit ready={ready}/>)
  }

  static button(){
    return screen.getByRole('button')
  }
}