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

firebase.initializeApp(config);
module.exports = async (sender = '', receiver = '', message = '', createdDatetime = '', context) => {
  message_array = message.split(", ")
  let restaurant = message_array[1]
  let item = message_array[2]

  var data = {
    restaurant: restaurant,
    item: item
  }

  var request = require('request');
  request.post('https://localhost:5000/login', {form:{'username':'test', 'password':'password'}}, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
  });

  return send(
    receiver,
    sender,
    `Restaurant: ${restaurant}, Item: ${item}`
  )
}
