const { repositoryFactory } = require('../repositories/factory')

async function findByRm (req, res) {
    const { rm } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findByRm(rm)
    return res.json(teachers)
}

module.exports = { findByRm }