const assert = require('assert-argument')
const createCrawler = require('simplecrawler')

module.exports = function crawlGrads (sources, options) {
  assert.isArray(sources, 'crawl-grads: sources array is required as first argument')
  const defaultMap = (link) => link.replace(options.regex, '')
  options = options || {}
  options.regex = options.regex || (/\.info$/)
  options.map = options.map || defaultMap
  const links = {}

  const crawlPromises = sources.map((source) => {
    return new Promise((resolve, reject) => {
      links[source] = []

      const crawler = createCrawler(source)
      crawler.maxDepth = 2

      crawler.on('fetchcomplete', (queueItem, responseBuffer, response) => {
        const url = queueItem.url
        if (url.match(options.regex)) {
          links[source].push(options.map(url))
        }
      })

      crawler.on('complete', () => {
        resolve()
      })

      crawler.start()
    })
  })

  return Promise.all(crawlPromises).then(() => links)
}
