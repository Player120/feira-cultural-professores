const { repositoryFactory } = require('../repositories/factory')

async function findByAcceptEvaluate (req, res) {
    const { aceitaAvaliar } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findByAcceptEvaluate(aceitaAvaliar)
    return res.json(teachers)
}

module.exports = { findByAcceptEvaluate }