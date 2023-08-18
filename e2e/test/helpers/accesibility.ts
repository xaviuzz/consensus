import AxeBuilder from '@axe-core/playwright'
import { Page, expect } from '@playwright/test'

type AccesibilityOptions = {
  debugOn?: boolean,
  allowed?: number
}

const defaults: AccesibilityOptions = {
  debugOn: false,
  allowed: 0
}

const checkAccesibility = async (
  results:any,
  accesibilityOptions: AccesibilityOptions = defaults
) => {
  const options: AccesibilityOptions = { ...defaults, ...accesibilityOptions }
  const violations = results.violations
  if (options.debugOn) debug(violations)
  expect(violations).toHaveLength(options.allowed!)
}

const debug = (violations) => {
  console.log('\n')
  violations.map((violation) => {
    console.warn(violation.help, violation.nodes.length)
    violation.nodes.map((node) => {
      console.log(node)
    })
  })
}

export default checkAccesibility
