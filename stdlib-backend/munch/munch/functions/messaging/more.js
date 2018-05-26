const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')

var admin = require('firebase-admin');

var serviceAccount = require('../../firebase/munch-eac1f-firebase-adminsdk-m67bj-66f4e3c1b5.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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
  var ref = db.ref('restaurants')


  return send(
    receiver,
    sender,
    `This is the MORE handler for your MessageBird SMS handler on StdLib` +
      `\n\n` +
      `You can customize its behavior in /functions/messaging/more.js`
  )
}
