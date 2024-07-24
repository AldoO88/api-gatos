// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const texteContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log(texteContent, imageSrc)
  await expect(texteContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('hola')).toBeTruthy()
})
