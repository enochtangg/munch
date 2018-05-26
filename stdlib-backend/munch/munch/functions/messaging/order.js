const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')
var firebase = require("firebase");

/**
* MORE handler, responds if user texts "more"
*  (or any uppercase variation like "MORE")
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {any}
*/

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSeIK_ynpeKDSzXZ824N23Rr4ppnSwzqQ",
  authDomain: "munch-eac1f.firebaseapp.com",
  databaseURL: "https://munch-eac1f.firebaseio.com/",
  storageBucket: "https://munch-eac1f.appspot.com",
};
firebase.initializeApp(config);
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
