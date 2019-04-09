const base64 = require("base-64");
const db = require("../../utils/data");
const router = require("express").Router();
const crypto = require("../../utils/crypto");

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
    .then(snapshot => snapshot.data().credentials)
    .then(val =>
      handler.send(handler.res, validateHash(val.hash, password, val.salt))
    )
    .catch(err => {
      handler.send(handler.res);
      console.log(err);
    });
};

const sendResponse = (res = null, data = null) => {
  if (!data) return res.send(false);
  return res.send(data);
};

module.exports = router;
