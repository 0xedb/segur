const randomWords = require('random-words');

const router = require('express').Router();

router.post('/api', (req, res) => {
    res.status(200).json({
        you: `${randomWords({exactly:5, wordsPerString:4})}`
    });
});

module.exports = router;