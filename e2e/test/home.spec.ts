import { expect, test } from '@playwright/test'


test.describe('Home page in consensus', () => {
  const baseURL: string = 'http://consensus-app:4000/'

  test('Has the right title', async ({ page }) => {
    page.goto(baseURL)

    const header = page.getByRole('banner').getByRole('heading',{level: 1})
    await expect(header).toHaveText('CONSENSUS')
  })
  
  test('can login', async ({ page }) => {
    page.goto(baseURL)
    await page.getByPlaceholder(/login/).fill('xavi')
    await page.getByPlaceholder(/contrasenya/).fill('xavi')
    await page.getByRole('button',{ name: 'Identificat' }).click()
    await page.getByText('Agora').click()
    expect(page.getByText('Agora')).toHaveText('Agora')
  })
})

