#! /usr/bin/env node

const crawler = require('../index')

const sources = process.argv.slice(2)

crawler(sources).then((links) => {
  console.log(JSON.stringify(links))
})
