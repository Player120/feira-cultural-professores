const { Router } = require('express')
const teachersListController = require('./controllers/teachersListController')
const teachersListByAreaController = require('./controllers/teachersListByAreaController')
const teachersListByDisciplineController = require('./controllers/teachersListByDisciplineController')
const teachersListByAcceptEvaluate = require('./controllers/teachersListByAcceptEvaluateController')
const teachersListByAcceptOrientate = require('./controllers/teachersListByAcceptOrientateController')
const subjectsListController = require('./controllers/subjectsListController')
const teachersCreateController = require('./controllers/teachersCreateController')
const router = Router()

router.get('/teachers', teachersListController.listAll)
router.get('/teachers/area/:area', teachersListByAreaController.findByArea)
router.get('/teachers/discipline/:discipline', teachersListByDisciplineController.findByDiscipline)
router.get('/teachers/accept-evaluate/:aceitaAvaliar', teachersListByAcceptEvaluate.findByAcceptEvaluate)
router.get('/teachers/accept-orientate/:aceitaOrientar', teachersListByAcceptOrientate.findByAcceptOrientate)
router.post('/teachers', teachersCreateController.create)

router.get('/subjects', subjectsListController.listAll)
  
module.exports = { router }