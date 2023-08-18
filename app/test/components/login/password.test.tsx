import { render, screen } from '@testing-library/react'
import React from 'react'
import Password from '../../../src/components/login/Password'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { act } from 'react-dom/test-utils'

describe('password', () => {
  it('is not readable', () => {
    SUT.render()
    expect(SUT.input()).toHaveAttribute('type','password')
  })

  it('can be read clicking the icon', async () => {
    SUT.render()
    await SUT.clickIcon()
    expect(SUT.button()).toHaveAccessibleName('password.no.show')
    expect(SUT.input()).toHaveAttribute('type','text')
  })

  it('notifies changes', async () => {
    const aPassword:string = 'A Password' 
    SUT.render()
    await SUT.fillWith(aPassword)
    expect(SUT.spy).toHaveBeenCalledWith(aPassword)
  })
})

class SUT {
  static spy =  vi.fn()

  static render() {
    render(<Password onChange={this.spy}/>)
  }

  static input(){
    return screen.getByRole('textbox')
  }

  static async fillWith(value:string){
    await userEvent.type(this.input() , value)
  }

  static async clickIcon(){
    await act(async()=>{
      await userEvent.click(this.button())
    })
  }

  static button(){
    return screen.getByRole('button')
  }
}