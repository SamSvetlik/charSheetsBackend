const express = require('express')
const router = express.Router()
const characterControls = require('../controllers/characters')

router.get('/:character', characterControls.char)

module.exports = router;