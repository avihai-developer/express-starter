var router = require('express').Router();

router.post('/', function (req, res, next) {
    res.send('Create user')
});

router.get('/:id', function (req, res, next) {
    res.send('Get user')
})

router.put('/:id',function (req, res, next) {
    res.send('Update user')
})

router.delete('/:id', function (req, res, next) {
    res.send('Delete user')

})

module.exports = router;
