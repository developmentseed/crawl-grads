var test = require('tape')

const crawler = require('../index')

test('basic usage', function (t) {
  const sources = [
    'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg3_2d_aer_Nx'
  ]

  const result = crawler(sources)

  result.catch(t.notOk)

  result.then((links) => {
    t.ok(links)
    t.end()
  })
})
