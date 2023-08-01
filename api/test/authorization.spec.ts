import { describe, it, expect } from 'vitest'
import authorization from '../src/actions/authorization'
describe("Authorization", () => {

  it("returns a token when credentials are ok", async () => {
    const token:string = authorization.login('xavi','xavi')
    expect(token).toBeTruthy()
  })

  it("returns an empty token when credentials are not ok", async () => {
    const token:string = authorization.login('bad','bad')
    expect(token).toBeFalsy()
  })
})
