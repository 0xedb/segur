const router = require('express').Router(); 


router.get('/access/:session_id', (req, res) => {
    res.redirect('/');    
});

module.exports = router;