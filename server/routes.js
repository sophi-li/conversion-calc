const express = require('express')
const cors = require('cors')
const jsonld = require('jsonld')
const { chromium } = require('playwright')
const { renderConvertedRecipe, parseRecipe } = require('./utils')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

// enable pre-flight request for POST request
router.options('/create', cors())

router.post('/create', cors(), async (req, res) => {
  console.log('url: ', req.body.url)

  if (!req.body.url) {
    res.status(400).send(`Bad request. URL: ${req.body.url}`)
  }

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(req.body.url)

  const handle = await page.$('script[type="application/ld+json"]')
  const text = await handle.innerText()

  const schemaContext = {
    recipe: 'http://schema.org/Recipe',
    recipeIngredient: 'http://schema.org/recipeIngredient',
  }

  const compacted = await jsonld.compact(JSON.parse(text), schemaContext)

  let ingredients = compacted.recipeIngredient

  if (Array.isArray(compacted)) {
    ingredients = compacted['@graph'].filter(
      (item) => item['@type'] === 'recipe'
    )[0].recipeIngredient
  }

  let renderedIngredients = renderConvertedRecipe(parseRecipe(ingredients))

  await browser.close()
  res.json(renderedIngredients)
})

module.exports = router
