const {Router} = require('express')

const router = Router()

router.get('/', (req, res, next) => {
    res.json("this is the user router")
})

module.exports = router