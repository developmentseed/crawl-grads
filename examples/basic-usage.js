const crawler = require('../index')

const sources = [
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg3_2d_aer_Nx',
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg1_2d_slv_Nx',
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg1_2d_flx_Nx'
]

const result = crawler(sources)

result.then((links) => {
  console.log(JSON.stringify(links))
})
