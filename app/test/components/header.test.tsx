import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "../../src/components/header/Header"
import { MemoryRouter } from "react-router-dom"

describe("Header", () => {
  it("has the name of the app", () => {
    SUT.render()
    const name = screen.getByText("CONSENSUS")
    expect(name).toBeInTheDocument()
  })
  
})

class SUT {
  static render() {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  }
}