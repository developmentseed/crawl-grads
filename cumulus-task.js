const path = require('path')
const cumulusMessageAdapter = require('@cumulus/cumulus-message-adapter-js')
const crawler = require('./index')

module.exports.handler = handler(event, context, callback) {
  cumulusMessageAdapter.runCumulusTask(crawler, event, context, callback)
}
