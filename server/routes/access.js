const router = require('express').Router();  

router.get('/access', (req, res) => { 
    console.log(req.params); 
    // res.send(req);
    // res.redirect("/");
    res.send(req.params);
});  

module.exports = router;