var router = require('express').Router();

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.send(`
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body style="text-align: center">
            <h1>Hello World</h1>
        </body>
    </html>
    `);
});

module.exports = router;
