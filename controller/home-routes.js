const router = require('express').Router();

// Homepage

router.get('/',  (req, res) => {
    try{
        console.log("Hello world!");
        res.render('homepage');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
