const randomWords = require("random-words");
const router = require("express").Router();
const cred = require("../routes/cred"); 

router.use("/api", cred);  


router.post("/api", (req, res) => {
    console.log(req.body);
  res.status(200).json({
    you: `${randomWords({ exactly: 5, wordsPerString: 4 })}`
  });
});

module.exports = router;
