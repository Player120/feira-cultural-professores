const { repositoryFactory } = require('../repositories/factory')

async function findByArea (req, res) {
    const { area } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findByArea(area)
    return res.json(teachers)
}

module.exports = { findByArea }