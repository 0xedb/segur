const base64 = require("base-64");
const {db} = require("../../utils/firebase");
const router = require("express").Router();
const crypto = require("../../utils/crypto");
const jsonwebtoken = require("jsonwebtoken");

const validateHash = crypto.validateHash;

router.post("/validate", (req, res) => {
  /*
   do some validation like the origin of the  request
  localhost/platform(heroku / now)
  can check from header 
  */

  const user = base64.decode(req.body.user);
  validateCred(req.body.hash, user, { res, send: sendResponse });
});

const validateCred = (password, user, handler) => {
  db.collection("user")
    .doc(user)
    .get()
    .then(snapshot => snapshot.data())
    .then(val =>
      handler.send(handler.res, validateHash(val.credentials.hash, password, val.credentials.salt), val.type)
    )
    .catch(err => {
      handler.send(handler.res);
      console.log(err);
    });
};

const sendResponse = (res = null, data = null, info = null) => {
  if (!data) return res.send(false);

  // send jsonwebtoken for cookie creation
  const token = jsonwebtoken.sign({data, info}, process.env.SEGUR_PASSPHRASE_KEY); 
  return res.send({data, info});
};

module.exports = router;
