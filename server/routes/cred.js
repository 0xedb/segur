const base64 = require("base-64");
// const { db } = require("../../utils/firebase");
// const { auth } = require("../../utils/firebase");
const router = require("express").Router();
const crypto = require("../../utils/crypto");

const validateHash = crypto.validateHash;

// router.post("/validate/register", (req, res) => {
//   /*
//       do some  more validation
//   */
//   registerUser(req.body, res);
// });

// router.post("/validate/login", (req, res) => {
//   /*
//    do some validation like the origin of the  request
//   localhost/platform(heroku / now)
//   can check from header
//   */
// });

// const loginUser = (info, res) => {

// };

// const registerUser = (info, res) => {
//   auth
//     .createUser({
//       email: info.email,
//       emailVerified: false,
//       password: info.password,
//       displayName: info.name,
//       disabled: false
//     })
//     .then(function(userRecord) {
//       res.send("successful");
//       // See the UserRecord reference doc for the contents of userRecord.
//       console.log("Successfully created new user:", userRecord.uid);
//     })
//     .catch(function(error) {
//       res.send("failure!!!!");
//       console.log("Error creating new user:", error);
//     });
// };

module.exports = router;
