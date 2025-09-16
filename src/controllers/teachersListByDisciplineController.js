const { repositoryFactory } = require('../repositories/factory')

async function findByDiscipline (req, res) {
    const { discipline } = req.params
    console.log('disciplina', discipline)
    const repository = repositoryFactory()
    const teachers = await repository.findByDiscipline(discipline)
    return res.json(teachers)
}

module.exports = { findByDiscipline }