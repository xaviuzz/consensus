import { expect, test } from '@playwright/test'


test.describe('Home page in consensus', () => {
  const baseURL: string = 'http://localhost:4000/'

  test('Has the right title', async ({ page }) => {
    page.goto(baseURL)
    const header = page.getByRole('banner').getByRole('heading',{level: 1})
    await expect(header).toHaveText('CONSENSUS')
  })
  
  test('can login', async ({ page }) => {
    page.goto(baseURL)
    await login(page)
    expect(page.getByText('Agora')).toHaveText('Agora')
  })

  test('if loged identity is shown', async ({ page }) => {
    page.goto(baseURL)
    await login(page)
    expect(page.getByLabel('Rainbowraptor')).toHaveText('R')
  })

  test('as you logout you loose your identity', async ({ page }) => {
    page.goto(baseURL)
    await login(page)
    await page.getByLabel('Rainbowraptor').click()
    await page.getByText('Perdre la identitat').click()
    expect(page.getByRole('button', { name: 'Identificat' })).toHaveText('Identificat')
  })
  
})

async function login(page) {
  await page.getByPlaceholder(/login/).fill('xavi')
  await page.getByPlaceholder(/contrasenya/).fill('xavi')
  await page.getByRole('button', { name: 'Identificat' }).click()
  await page.getByText('Agora').click()
}

