const base64 = require("base-64");
const db = require("../../utils/data");
const router = require("express").Router();
const crypto = require("../../utils/crypto");

// const generateScrypt = crypto.generateScrypt;
const validateHash = crypto.validateHash;

router.post("/validate", (req, res) => {
  const user = base64.decode(req.body.user);
  // const credentials = generateScrypt(req.body.hash);

  validateCred(req.body.hash, user);

  res.send(req.body);
});

const validateCred = (password, user) => {
  console.log(user);
  db.collection("user")
    .doc(user)
    .get()
    .then(snapshot => {
      const cred = snapshot.data().credentials;
      console.log(validateHash(cred.hash, password, cred.salt));
    })
    .catch(err => console.log(err));
};

module.exports = router;
