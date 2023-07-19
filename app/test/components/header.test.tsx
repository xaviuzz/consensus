import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "../../src/components/Header"
import appInfo from "../../package.json"
import  userEvent from "@testing-library/user-event"

describe("Header", () => {
  it("has three labels", () => {
    SUT.render()
    const name = screen.getByText("CONSENSUS")
    expect(name).toBeInTheDocument()
  })
  
})

class SUT {

  static render() {
    render(<Header />)
  }
}