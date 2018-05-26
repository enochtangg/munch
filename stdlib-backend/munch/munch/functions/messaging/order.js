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
  let message_restaurant = message_array[1]
  let message_item = message_array[2]

  return send(
    receiver,
    sender,
    `Restaurant: ${message_restaurant} Item: ${message_item}`
  )
}
