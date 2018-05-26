const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')

var firebase = require('firebase-admin');
var serviceAccount = require('../../firebase/munch-eac1f-firebase-adminsdk-m67bj-66f4e3c1b5.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://munch-eac1f.firebaseio.com'
});

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
  var db = firebase.database();
  var rootRef = db.ref("restaurants");
  var restaurantRef = rootRef.child("restaurant")
  restaurantRef.once("value").then(snap => snap.val())

  if (restaurantRef == null) {
    return send(
      receiver,
      sender,
      `Sorry, this restaurant does not exist.`
    )
  }

  message_array = message.split(", ")
  let message_restaurant = message_array[1]
  let message_item = message_array[2]

  return send(
    receiver,
    sender,
    `Restaurant: ${message_restaurant} Item: ${message_item}`
  )
}
