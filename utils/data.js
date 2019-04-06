const admin = require("firebase-admin");

const keyPath = `${process.env.SEGUR_ACCOUNT_KEY}`;
const serviceAccount = require(keyPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${process.env.SEGUR_DATABASE_URL}`
});

const db = admin.firestore();

module.exports = db;
