const { repositoryFactory } = require('../repositories/factory')

async function findByAcceptOrientate(req, res) {
    const { aceitaOrientar } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findByAcceptOrientate(aceitaOrientar)
    return res.json(teachers)
}

module.exports = { findByAcceptOrientate }