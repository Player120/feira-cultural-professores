# ALUNOS
# [] Deve ser possível listar os alunos cadastrados no sistema por RM.

# PROFESSORES
# [] Deve ser possível listar os professores cadastrados no sistema por RM.

# PROJETOS
# [] Deve ser possível cadastrar um novo projeto.
# [] Um novo projeto deve respeitar a seguinte estrutura de registro:
{
    rm: number
    nome: string
    temaODS: Array<string>
    objetivoGeral: string
    objetivoEspecífico: string
    resumo: string
    integrantes: Array<Alunos>
    orientadores: Array<Professores>
    parteCientifica: string
    parteExperimental: string
    referencias: string
}
# [] Um novo projeto deve respeitar a seguinte estrutura de entrada:
{
    rm: number
    nome: string
    temaODS: Array<string>
    objetivoGeral: string
    objetivoEspecífico: string
    resumo: string
    integrantes: Array<number>
    orientadores: Array<number>
    parteCientifica: string
    parteExperimental: string
    referencias: string
}
