'use string'

const fetch = require('node-fetch')


module.exports = (config) => {
  const url = config.url || `https://api.mailgun.net/v3/${config.domain}/messages`

  const headers = {
    authorization: `Basic ${Buffer.from(`api:${config.key}`).toString('base64')}`,
    'content-type': 'application/x-www-form-urlencoded',
    accept: 'application/json',
  }

  return function sendMail (json) {
    return fetch(url, {
      method: 'POST',
      headers,
      body: qs.stringify(json),
    })
  }
}
