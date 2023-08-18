import { expect, test } from '@playwright/test'
import Credentials from './regions/credentials'
import { goodPassword, goodUser } from './fixture/fixture'
import checkAccesibility from './helpers/accesibility'
import AxeBuilder from '@axe-core/playwright'


test.describe('Credentials', () => {
  
  test('check is ok', async ({ page }) => {
    const login = await Credentials.get(page)
    await login.login(goodUser,goodPassword)
    expect(page.getByText('Agora')).toHaveText('Agora')
  })

  test('is accesible',async({page})=>{
    await Credentials.get(page)
    const results = await new AxeBuilder({ page }).analyze()
    checkAccesibility(results,{allowed :1})
  }) 
  
})


