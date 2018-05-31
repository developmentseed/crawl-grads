# crawl-grads

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/crawl-grads.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/crawl-grads

## About

Crawl [GrADS](http://cola.gmu.edu/grads/gds.php) catalog pages.

## Install

```sh
npm install --save crawl-grads
```

## Usage

```js
const crawler = require('crawl-grads')

const sources = [
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg3_2d_aer_Nx',
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg1_2d_slv_Nx',
  'https://opendap.nccs.nasa.gov/dods/GEOS-5/fp/0.25_deg/fcast/tavg1_2d_flx_Nx'
]

const result = crawler(sources)

result.then((links) => {
  console.log(JSON.stringify(links))
})

```

## Documentation
- [Tests](tests/)

### Examples
- [Basic example](examples/basic-usage.js)


## License

[ISC](LICENSE.md)
