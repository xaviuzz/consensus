import { Page, expect, test } from '@playwright/test'


test.describe('Home page in consensus', () => {
  const baseURL: string = 'http://localhost:4000/'

  test('Has the right title', async ({ page }) => {
    page.goto(baseURL)

    const header = page.getByRole('banner').getByRole('heading',{level: 1})
    await expect(header).toHaveText('CONSENSUS')
  })
  
})

