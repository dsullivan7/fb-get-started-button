const rp = require('request-promise')

const apiUrl = 'https://graph.facebook.com/v2.9/me/thread_settings'

/**
 * adds the "Get Started" button from a Facebook page
 * @param  {String} accessToken - the access token for the Facebook page
 * @param  {String} payload - the user defined payload for the webhook
 * @return {Object} - the promise for the request
 */
const addGetStarted = (accessToken, payload) =>
  rp({
    uri: apiUrl,
    qs: { access_token: accessToken },
    method: 'POST',
    body: {
      setting_type: 'call_to_actions',
      thread_state: 'new_thread',
      call_to_actions: [
        {
          payload,
        },
      ],
    },
    json: true,
  }).then(res => console.log(res.result)).catch(error => console.log(`ERROR: ${error}`))

/**
 * removes the "Get Started" button from a Facebook page
 * @param  {String} accessToken - the access token for the Facebook page
 * @return {Object} - the promise for the request
 */
const removeGetStarted = accessToken =>
  rp({
    uri: apiUrl,
    qs: { access_token: accessToken },
    method: 'DELETE',
    body: {
      setting_type: 'call_to_actions',
      thread_state: 'new_thread',
    },
    json: true,
  }).then(res => console.log(res.result)).catch(error => console.log(`ERROR: ${error}`))

module.exports = {
  addGetStarted,
  removeGetStarted,
}
