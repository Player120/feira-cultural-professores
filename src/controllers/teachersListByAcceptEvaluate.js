const { repositoryFactory } = require('../repositories/factory')

async function findByAcceptEvaluate (req, res) {
    const { acceptEvaluate } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findByAcceptEvaluate(acceptEvaluate)
    return res.json(teachers)
}

module.exports = { findByAcceptEvaluate }