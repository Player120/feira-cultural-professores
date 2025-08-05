const { Router } = require('express')
const teachersListController = require('./controllers/teachersListController')
const subjectsListController = require('./controllers/subjectsListController')
const teachersCreateController = require('./controllers/teachersCreateController')
const router = Router()

router.get('/teachers', teachersListController.listAll)
router.post('/teachers', teachersCreateController.create)

router.get('/subjects', subjectsListController.listAll)
  
module.exports = { router }