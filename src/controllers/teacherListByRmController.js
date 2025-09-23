const { repositoryFactory } = require('../repositories/factory')

async function findByRm (req, res) {
    const { rm } = req.params
    const repository = repositoryFactory()
    const teacher = await repository.findByRm(rm)
    return res.json(teacher)
}

module.exports = { findByRm }