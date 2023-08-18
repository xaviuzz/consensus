import { expect, test } from '@playwright/test'
import Home from './regions/home'
import AxeBuilder from '@axe-core/playwright'
import checkAccesibility from './helpers/accesibility'


test.describe('Home page in consensus', () => {

  test('if loged identity is shown', async ({ page }) => {
    const agora = await Home.get(page)
    expect(agora.userMenu()).toHaveText('R')
  })

  test('as you logout you loose your identity', async ({ page }) => {
    const agora = await Home.get(page)
    await agora.logout()
    expect(page.getByRole('button', { name: 'Identificat' })).toHaveText('Identificat')
  })

  test('is accesible',async({page})=>{
    await Home.get(page)
    const results = await new AxeBuilder({ page }).analyze()
    checkAccesibility(results,{allowed :1})
  }) 
  
})


