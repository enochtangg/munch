const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')

/**
* MORE handler, responds if user texts "more"
*  (or any uppercase variation like "MORE")
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {any}
*/

module.exports = async (sender = '', receiver = '', message = '', createdDatetime = '', context) => {
  message_array = message.split(", ")
  let restaurant = message_array[1]
  let item = message_array[2]

  var request = require('request');

  request.post('https://munchapi.herokuapp.com/item/order',
    {form:{'restaurant_name':restaurant, 'item_name':item}},
    { json: true }, (err, res, body) => {
      console.log(res.status_code)
    if (res.status_code >= 200 && res.status_code <= 300) {
      return send(
        receiver,
        sender,
        `Congratulations. Your order of ${item} from ${restaurant} was successfuly placed.`
      )
    }
  });

  return send(
    receiver,
    sender,
    `Sorry, either the restaurant or item does not exist.`
  )
}
